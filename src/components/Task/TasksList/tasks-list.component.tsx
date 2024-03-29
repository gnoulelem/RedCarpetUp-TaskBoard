import React, { useRef } from 'react';
import { AddTask, TaskItem } from 'components';

import moreIcon from 'assets/icons/more-fill.svg';
import './tasks-list.styles.scss';

type TasksListProps = {
  taskList: any;
  removeTaskList: any;
  onAddNewTask: any;
  onEditTask: any;
};

const TasksList: React.FC<TasksListProps> = ({
  taskList,
  removeTaskList,
  onAddNewTask,
  onEditTask
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const showMenu = (): void => {
    menuRef.current!.toggleAttribute('hidden');
  };

  return (
    <>
      <div className="tasks-list">
        <div className="tasks-list-header">
          {taskList[1]?.name}
          <img onClick={showMenu} src={moreIcon} alt="More Icon" />
        </div>
        <div
          className="tasks-list-header-menu"
          hidden
          ref={menuRef}
          onClick={() => removeTaskList(taskList[0])}
        >
          Delete list
        </div>
        <AddTask onSelected={onAddNewTask} />
        {Object.entries(taskList[1]).map(
          (task, index) =>
            typeof task[1] !== 'string' && (
              <TaskItem onEditTask={onEditTask} task={task} key={index} />
            )
        )}
      </div>
    </>
  );
};

export default TasksList;
