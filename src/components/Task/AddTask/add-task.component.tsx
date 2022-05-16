import React from 'react';
import { AddButton } from 'components';

import './add-task.styles.scss';

type AddTaskProps = {
    onSelected: any;
};

const AddTask: React.FC<AddTaskProps> = ({ onSelected }) => {
  return (
    <div onClick={onSelected} className="add-task">
      <AddButton label="Add a task" size="small" />
    </div>
  );
};

export default AddTask;
