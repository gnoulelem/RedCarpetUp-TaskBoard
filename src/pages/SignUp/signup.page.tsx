import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthLayout } from 'components';
import { SignupContainer } from 'containers';

type SignupPageProps = {};

const SignupPage: React.FC<SignupPageProps> = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <SignupContainer navigate={navigate} />
    </AuthLayout>
  );
};

export default SignupPage;