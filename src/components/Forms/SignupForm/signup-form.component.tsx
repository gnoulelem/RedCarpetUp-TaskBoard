import React, { useRef } from 'react';
import { TextInput, Checkbox, BasicButton } from 'components';
import {
  usernameValidator,
  passwordValidator,
  emailValidator,
} from '../../../utils/form-validators';

import './signup-form.styles.scss';

type SignupFormProps = {
    submitSignUp: any;
    firebaseError: any;
};

const SignupForm: React.FC<SignupFormProps> = ({submitSignUp, firebaseError}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const formErrorRef = useRef<HTMLDivElement>(null);

  const handleSignUp = (e: { preventDefault: () => void }): void => {
    e.preventDefault();
    const form = formRef.current;
    formErrorRef.current!.innerHTML = '';
    const validationErrors = [
      ...usernameValidator(form!['username'].value),
      ...passwordValidator(form!['password'].value),
      ...emailValidator(form!['email'].value),
    ];
    if(validationErrors.length) {
        validationErrors.forEach((error) => {
            const child = document.createElement('p');
            child.textContent = error;
            child.classList.add('form-error');
            formErrorRef.current!.appendChild(child);
        });
        return;
    }
    submitSignUp(form!['email'].value, form!['password'].value);
    
  };

  return (
    <div className="signup-form">
      <p className="signup-form-heading">Sign up</p>
      <div className="signup-form-inputs">
        <div ref={formErrorRef}>
            {firebaseError && <p className="form-error ">{firebaseError}</p>}
        </div>
        <form ref={formRef} onSubmit={handleSignUp}>
          <TextInput
            label="Username"
            placeholder="Enter Name"
            name="username"
          />
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
          <Checkbox label="I accept the terms & coditions" />
          <div className="signup-form-button">
            <BasicButton label="Sign up" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
