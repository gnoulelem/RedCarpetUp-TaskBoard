import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from 'components';
import { LoginContainer } from 'containers';

type LoginPageProps = {};

const LoginPage: React.FC<LoginPageProps> = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <LoginContainer navigate={navigate} />
    </AuthLayout>
  );
};

export default LoginPage;
