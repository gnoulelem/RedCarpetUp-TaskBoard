import React from 'react';

import addIcon from 'assets/icons/add-fill.svg';
import './add-button.styles.scss';

type AddButtonProps = {
  label: string;
  size: string;
};

const AddButton: React.FC<AddButtonProps> = ({ label, size }) => {
  return (
    <div className="add-button">
      <button
        style={
          size === 'small'
            ? { width: '2.5rem', height: '2.5rem' }
            : { width: '4rem', height: '4rem' }
        }
      >
        <img src={addIcon} alt="Add a task" />
      </button>
      <p>{label}</p>
    </div>
  );
};

export default AddButton;
