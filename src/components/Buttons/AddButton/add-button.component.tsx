import React from 'react';

import addIcon from 'assets/icons/add-fill.svg';
import './add-button.styles.scss';

type AddButtonProps = {};

const AddButton: React.FC<AddButtonProps> = () => {
  return (
    <div className="add-button">
      <button style={{ width: '2.5rem', height: '2.5rem' }}>
        <img src={addIcon} alt="Add a task" />
      </button>
      <p>Add a task</p>
    </div>
  );
};

export default AddButton;
