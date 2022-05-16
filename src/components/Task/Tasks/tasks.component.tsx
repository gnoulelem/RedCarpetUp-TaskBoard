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
  submitTask: any;
  removeTask: any;
  taskLists: any;
};

const Tasks: React.FC<TasksProps> = ({
  submitNewList,
  taskLists,
  submitTask,
  removeTask,
  removeTaskList,
}) => {
  const [showEditTaskListModal, setShowEditTaskListModal] = useState(false);
  const [selectedTaskList, setSelectedTaskList] = useState('');
  const [selectedTask, setSelectedTask] = useState('');

  return (
    <>
      <div className="tasks">
        {taskLists &&
          Object.entries(taskLists).map((taskList, index) => (
            <TasksList
              onEditTask={(task: any) => {
                setSelectedTaskList(taskList[0]); 
                setSelectedTask(task)
              }}
              onAddNewTask={() => setSelectedTaskList(taskList[0])}
              taskList={taskList}
              removeTaskList={removeTaskList}
              key={index}
            />
          ))}
      </div>
      {selectedTaskList && (
        <EditTaskModal
          selectedTask={selectedTask}
          submitTask={submitTask}
          removeTask={removeTask}
          onCloseModal={() => {
            setSelectedTaskList('');
            setSelectedTask('');
          }}
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
