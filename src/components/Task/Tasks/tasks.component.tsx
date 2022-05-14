import React from 'react';
import { TasksList, EditTaskModal } from 'components';

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
        <EditTaskModal />
        </>
    );
};

export default Tasks;