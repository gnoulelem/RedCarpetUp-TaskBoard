import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { SignupForm, Loader } from 'components';

type SignupContainerProps = {
  navigate: any;
};
type SignupContainerState = {
  isLoading: boolean;
  firebaseError: any;
};

class SignupContainer extends React.Component<
  SignupContainerProps,
  SignupContainerState
> {
  constructor(props: SignupContainerProps) {
    super(props);
    this.state = {
      isLoading: false,
      firebaseError: null,
    };
  }

  _submitSignUp = async (email: string, password: string): Promise<void> => {
    const auth = getAuth();
    try {
      this.setState({ isLoading: true });
      await createUserWithEmailAndPassword(auth, email, password);
      this.props.navigate('/');
    } catch (error: any) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          this.setState({
            firebaseError: 'Address mail provided is already in use',
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
        <SignupForm
          submitSignUp={this._submitSignUp}
          firebaseError={this.state.firebaseError}
        />
        <Loader visible={this.state.isLoading} />
      </>
    );
  }
}

export default SignupContainer;
