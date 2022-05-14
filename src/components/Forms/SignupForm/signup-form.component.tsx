import React from 'react';
import { TextInput, Checkbox, BasicButton } from 'components';

import './signup-form.styles.scss';

type SignupFormProps = {};

const SignupForm: React.FC<SignupFormProps> = () => {
    return (
        <div className="signup-form">
            <p className="signup-form-heading">Sign up</p>
            <div className="signup-form-inputs">
                <TextInput label="Username" placeholder="Enter Name" />
                <TextInput label="Email Address" placeholder="Enter Email Address" />
                <TextInput label="Password" placeholder="Enter Password" />
                <Checkbox label="I accept the terms & coditions" />
                <div className="signup-form-button">
                    <BasicButton label="Sign up"/>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;