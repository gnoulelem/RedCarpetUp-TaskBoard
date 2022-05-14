import React from 'react';
import { BoardLayout } from 'components';
import { TaskContainer } from 'containers';

type TasksProps = {};

const Tasks: React.FC<TasksProps> = () => {
    return (
        <BoardLayout>
            <TaskContainer />
        </BoardLayout>
    );
};

export default Tasks;