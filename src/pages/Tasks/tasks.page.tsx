import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BoardLayout } from 'components';
import { TaskContainer } from 'containers';

type TasksProps = {};

const Tasks: React.FC<TasksProps> = () => {
  const navigate = useNavigate();

  return (
    <BoardLayout>
      <TaskContainer navigate={navigate} />
    </BoardLayout>
  );
};

export default Tasks;
