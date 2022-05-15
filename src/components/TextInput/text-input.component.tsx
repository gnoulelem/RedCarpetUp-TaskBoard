import React from 'react';

import './text-input.styles.scss';

type TextInputProps = {
  type?: string;
  label: string;
  placeholder: string;
  name?: string;
};

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  name,
  type,
}) => {
  return (
    <div className="text-input">
      <fieldset>
        <legend>{label}</legend>
        <input placeholder={placeholder} name={name} type={type} />
      </fieldset>
    </div>
  );
};

export default TextInput;
