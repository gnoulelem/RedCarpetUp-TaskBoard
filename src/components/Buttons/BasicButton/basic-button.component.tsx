import React from 'react';

import './basic-button.styles.scss';

type BasicButtonProps = {
  label: string;
};

const BasicButton: React.FC<BasicButtonProps> = ({ label }) => {
  return (
    <div className="basic-button">
      <button>{label}</button>
    </div>
  );
};

export default BasicButton;
