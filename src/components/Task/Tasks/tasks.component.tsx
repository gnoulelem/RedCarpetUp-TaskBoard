import React from 'react';
import { TasksList, EditTaskModal, AddButton, EditTasksListModal } from 'components';

import './tasks.styles.scss';

type TasksProps = {};

const Tasks: React.FC<TasksProps> = () => {
  return (
    <>
      <div className="tasks">
        <TasksList />
        <TasksList />
        <TasksList />
        <TasksList />
      </div>
      {/* <EditTaskModal /> */}
      <EditTasksListModal />
      <div className="tasks-fab">
        <AddButton label="" size="large"/>
      </div>
    </>
  );
};

export default Tasks;
