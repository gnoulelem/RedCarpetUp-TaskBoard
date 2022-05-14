import React from 'react';
import { SignupForm } from 'components';

type SignupContainerProps = {};

class SignupContainer extends React.Component {
    constructor(props: SignupContainerProps) {
        super(props);
        this.state = {};
    }

    render() {
        return <SignupForm />
    }
}

export default SignupContainer;