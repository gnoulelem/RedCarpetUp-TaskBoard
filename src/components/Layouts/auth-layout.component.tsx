import React from 'react';

import './auth-layout.styles.scss';

type AuthLayoutProps = {
  children: any;
};

const AuthLayout: React.FC<AuthLayoutProps> = ({
  children,
}) => {
  return (
    <div className="auth-layout">
      {children}
    </div>
  );
};

export default AuthLayout;
