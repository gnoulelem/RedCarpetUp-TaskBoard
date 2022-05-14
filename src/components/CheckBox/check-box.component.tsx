import React from 'react';

import './check-box.styles.scss';

type CheckboxProps = {
    label: string;
};

const checkbox: React.FC<CheckboxProps> = ({ label}) => {
    return (
        <div className="check-box">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">{label}</label>
        </div>
    );
}

export default checkbox;