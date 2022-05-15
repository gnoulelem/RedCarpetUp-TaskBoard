import React from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { LoginForm, Loader } from 'components';

type LoginContainerProps = {
  navigate: any;
};

type LoginContainerState = {
  isLoading: boolean;
  firebaseError: any;
};

class LoginContainer extends React.Component<
  LoginContainerProps,
  LoginContainerState
> {
  constructor(props: LoginContainerProps) {
    super(props);
    this.state = {
      isLoading: false,
      firebaseError: null,
    };
  }

  _submitLogin = async (email: string, password: string): Promise<void> => {
    const auth = getAuth();
    try {
      this.setState({ isLoading: true });
      await signInWithEmailAndPassword(auth, email, password);
      this.props.navigate('/');
    } catch (error: any) {
      switch (error.code) {
        case 'auth/wrong-password':
          this.setState({
            firebaseError: 'Wrong credentials provided',
          });
          break;
      }
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    return (
      <>
        <LoginForm
          submitLogin={this._submitLogin}
          firebaseError={this.state.firebaseError}
        />
        <Loader visible={this.state.isLoading} />
      </>
    );
  }
}

export default LoginContainer;
