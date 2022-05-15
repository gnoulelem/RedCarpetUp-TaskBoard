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
  taskLists: any;
};

const Tasks: React.FC<TasksProps> = ({ submitNewList, taskLists, removeTaskList }) => {
  const [showEditTaskListModal, setShowEditTaskListModal] = useState(false);

  return (
    <>
      <div className="tasks">
        {taskLists &&
          Object.entries(taskLists).map((taskList, index) => (
            <TasksList taskList={taskList} removeTaskList={removeTaskList} key={index} />
          ))
        }
      </div>
      {/* <EditTaskModal /> */}
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
