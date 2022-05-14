import React from 'react';

import './text-input.styles.scss';

type TextInputProps = {
  label: string;
  placeholder: string;
};

const TextInput: React.FC<TextInputProps> = ({ label, placeholder }) => {
  return (
    <div className="text-input">
      <fieldset>
        <legend>{label}</legend>
        <input placeholder={placeholder} />
      </fieldset>
    </div>
  );
};

export default TextInput;
