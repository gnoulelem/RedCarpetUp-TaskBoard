import React from 'react';
import { TextInput, Checkbox, BasicButton } from 'components';

import './login-form.styles.scss';

type LoginFormProps = {};

const LoginForm: React.FC<LoginFormProps> = () => {
  return (
    <div className="login-form">
      <p className="login-form-heading">Log in!</p>
      <div className="login-form-inputs">
        <TextInput label="Email Address" placeholder="Enter Email Address" />
        <TextInput label="Password" placeholder="Enter Password" />
        <div className="login-form-inputs-props">
            <Checkbox label="Remember me" />
            <div className="login-form-inputs-props-forgotten-password">Forgot Password ?</div>
        </div>
        <BasicButton label="Log in"/>
      </div>
    </div>
  );
};

export default LoginForm;
