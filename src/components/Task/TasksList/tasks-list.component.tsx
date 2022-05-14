import React from 'react';
import { AddTask, TaskItem } from 'components';

import moreIcon from 'assets/icons/more-fill.svg';
import './tasks-list.styles.scss';

type TasksListProps = {};

const TasksList: React.FC<TasksListProps> = () => {
  return (
    <div className="tasks-list">
        <div className="tasks-list-header">
            My Tasks
            <img src={moreIcon} alt="More Icon"/>
        </div>
        <AddTask />
        <TaskItem />
        <TaskItem />
        <TaskItem />
    </div>
  );  
};

export default TasksList;