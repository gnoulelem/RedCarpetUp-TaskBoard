import React, { useState } from 'react';
import {
  TasksList,
  EditTaskModal,
  AddButton,
  EditTasksListModal,
} from 'components';

import './tasks.styles.scss';

type TasksProps = {
  submitNewList: any;
  removeTaskList: any;
  submitNewTask: any;
  taskLists: any;
};

const Tasks: React.FC<TasksProps> = ({
  submitNewList,
  taskLists,
  submitNewTask,
  removeTaskList,
}) => {
  const [showEditTaskListModal, setShowEditTaskListModal] = useState(false);
  const [selectedTaskList, setSelectedTaskList] = useState('');

  return (
    <>
      <div className="tasks">
        {taskLists &&
          Object.entries(taskLists).map((taskList, index) => (
            <TasksList
              onAddNewTask={() => {
                setSelectedTaskList(taskList[0]);
              }}
              taskList={taskList}
              removeTaskList={removeTaskList}
              key={index}
            />
          ))}
      </div>
      {selectedTaskList && (
        <EditTaskModal
          submitNewTask={submitNewTask}
          onCloseModal={() => setSelectedTaskList('')}
          selectedTaskList={selectedTaskList}
        />
      )}
      {showEditTaskListModal && (
        <EditTasksListModal
          onClose={() => setShowEditTaskListModal(false)}
          submitNewList={submitNewList}
        />
      )}
      <div className="tasks-fab">
        <AddButton
          label=""
          size="large"
          onClick={() => setShowEditTaskListModal(true)}
        />
      </div>
    </>
  );
};

export default Tasks;
