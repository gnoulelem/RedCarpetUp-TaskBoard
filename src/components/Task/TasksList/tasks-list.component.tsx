import React, { useRef } from 'react';
import { AddTask, TaskItem } from 'components';

import moreIcon from 'assets/icons/more-fill.svg';
import './tasks-list.styles.scss';

type TasksListProps = {};

const TasksList: React.FC<TasksListProps> = () => {
  const menuRef = useRef<HTMLDivElement>(null);

  const showMenu = (): void => {
    menuRef.current!.toggleAttribute('hidden');
  };

  return (
    <div className="tasks-list">
      <div className="tasks-list-header">
        My Tasks
        <img onClick={showMenu} src={moreIcon} alt="More Icon" />
      </div>
      <div className="tasks-list-header-menu" hidden ref={menuRef}>
        Delete list
      </div>
      <AddTask />
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </div>
  );
};

export default TasksList;
