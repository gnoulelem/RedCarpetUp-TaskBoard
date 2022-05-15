import React, { useRef } from 'react';

import pencilIcon from 'assets/icons/pencil-line.svg';
import './task-item.styles.scss';

type TaskItemProps = {};

const TaskItem: React.FC<TaskItemProps> = () => {
  const taskContentRef = useRef<HTMLParagraphElement>(null);

  const showTaskContent = (): void => {
    taskContentRef.current!.toggleAttribute('hidden');
  };

  return (
    <>
      <div className="task-item">
        <div style={{ color: 'green' }} className="task-item-title">
          <div className="task-item-title-checkbox"></div>
          <div onClick={showTaskContent}>Church build</div>
        </div>
        <div className="task-item-edit">
          <img src={pencilIcon} alt="Edit task" />
        </div>
      </div>
      <div className="task-content">
        <div ref={taskContentRef} hidden className="task-content-infos">
          <div className="task-content-infos-details">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            praesentium soluta delectus natus! Dolor temporibus deserunt placeat
            officia quis molestias sapiente omnis dolorem reprehenderit, expedita
            cumque doloremque voluptates odio dignissimos!
          </div>
          <div className="task-content-infos-date">3rd july, 2020</div>
        </div>
      </div>
    </>
  );
};

export default TaskItem;
