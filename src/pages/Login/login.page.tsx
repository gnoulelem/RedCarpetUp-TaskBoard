import React from 'react';
import { AuthLayout } from 'components';
import { LoginContainer } from 'containers';

type LoginPageProps = {};

const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <AuthLayout>
      <LoginContainer />
    </AuthLayout>
  );
};

export default LoginPage;
