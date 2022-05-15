import React, { useRef } from 'react';
import { TextInput, Checkbox, BasicButton } from 'components';
import { passwordValidator, emailValidator } from 'utils/form-validators';

import './login-form.styles.scss';

type LoginFormProps = {
  submitLogin: any;
  firebaseError: string;
};

const LoginForm: React.FC<LoginFormProps> = ({
  firebaseError,
  submitLogin,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const formErrorRef = useRef<HTMLDivElement>(null);

  const handleLogin = (e: { preventDefault: () => void }): void => {
    e.preventDefault();
    const form = formRef.current;
    formErrorRef.current!.innerHTML = '';
    const validationErrors = [
      ...passwordValidator(form!['password'].value),
      ...emailValidator(form!['email'].value),
    ];
    if (validationErrors.length) {
      validationErrors.forEach((error) => {
        const child = document.createElement('p');
        child.textContent = error;
        child.classList.add('form-error');
        formErrorRef.current!.appendChild(child);
      });
      return;
    }
    submitLogin(form!['email'].value, form!['password'].value);
  };

  return (
    <div className="login-form">
      <p className="login-form-heading">Log in!</p>
      <div className="login-form-inputs">
        <div ref={formErrorRef}>
          {firebaseError && <p className="form-error ">{firebaseError}</p>}
        </div>
        <form ref={formRef} onSubmit={handleLogin}>
          <TextInput
            label="Email Address"
            placeholder="Enter Email Address"
            name="email"
          />
          <TextInput
            label="Password"
            placeholder="Enter Password"
            name="password"
            type="password"
          />
          <div className="login-form-inputs-props">
            <Checkbox label="Remember me" />
            <div className="login-form-inputs-props-forgotten-password">
              Forgot Password ?
            </div>
          </div>
          <div className="login-form-button">
            <BasicButton label="Log in" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
