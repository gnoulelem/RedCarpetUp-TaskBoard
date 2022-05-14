import React from 'react';
import { AuthLayout } from 'components';
import { SignupContainer } from 'containers';

type SignupPageProps = {};

const SignupPage: React.FC<SignupPageProps> = () => {
    return (
        <AuthLayout>
            <SignupContainer />
        </AuthLayout>
    );
};

export default SignupPage;