import React from 'react';

import pencilIcon from 'assets/icons/pencil-line.svg';
import './task-item.styles.scss';

type TaskItemProps = {};

const TaskItem: React.FC<TaskItemProps> = () => {
  return (
    <div className="task-item">
      <div className="task-item-title">
        <div className="task-item-title-checkbox"></div>
        Church build
      </div>
      <div className="task-item-edit">
          <img src={pencilIcon} alt="Edit task" />
      </div>
    </div>
  );
};

export default TaskItem;
