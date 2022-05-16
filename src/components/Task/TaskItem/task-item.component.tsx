import React, { useRef } from 'react';

import pencilIcon from 'assets/icons/pencil-line.svg';
import './task-item.styles.scss';

type TaskItemProps = {
  task: any;
  onEditTask: any;
};

const TaskItem: React.FC<TaskItemProps> = ({ task, onEditTask }) => {
  const taskContentRef = useRef<HTMLParagraphElement>(null);

  const showTaskContent = (): void => {
    taskContentRef.current!.toggleAttribute('hidden');
  };

  return (
    <>
      <div className="task-item">
        <div className="task-item-title">
          <div className="task-item-title-checkbox"></div>
          <div onClick={showTaskContent}>{task[1].heading}</div>
        </div>
        <div onClick={() => onEditTask(task)} className="task-item-edit">
          <img src={pencilIcon} alt="Edit task" />
        </div>
      </div>
      <div className="task-content">
        <div ref={taskContentRef} hidden className="task-content-infos">
          <div className="task-content-infos-details">{task[1].details}</div>
          <div className="task-content-infos-date">{task[1].date}</div>
        </div>
      </div>
    </>
  );
};

export default TaskItem;
