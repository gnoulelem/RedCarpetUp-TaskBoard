import React from 'react';
import { LoginForm } from 'components';

type LoginContainerProps = {};

class LoginContainer extends React.Component<LoginContainerProps> {
  constructor(props: LoginContainerProps) {
    super(props);
    this.state = {};
  }

  render() {
    return <LoginForm />;
  }
}

export default LoginContainer;
