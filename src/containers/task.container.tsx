import React from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
} from 'firebase/database';
import { Tasks } from 'components';
import { Task } from 'models';

type TaskContainerProps = {
  navigate: any;
};
type TaskContainerState = {
  user: any;
  taskLists: any;
};

class TaskContainer extends React.Component<
  TaskContainerProps,
  TaskContainerState
> {
  constructor(props: TaskContainerProps) {
    super(props);
    this.state = {
      user: null,
      taskLists: null,
    };
  }

  componentDidMount() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.setState({ user });
        this._subscribeToTaskLists(user);
      } else {
        this.props.navigate('/login');
      }
    });
  }

  _subscribeToTaskLists = (user: any): void => {
    const db = getDatabase();
    const starCountRef = ref(db, 'task-lists/' + user.uid);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      this.setState({ taskLists: data });
    });
  };

  _submitNewList = async (newList: string): Promise<void> => {
    const user = this.state.user;
    const db = getDatabase();
    try {
      const taskListRef = ref(db, 'task-lists/' + user.uid);
      const newListRef = push(taskListRef);
      await set(newListRef, {
        name: newList,
      });
    } catch (error) {
      console.log(error);
    }
  };

  _removeTaskList = async (listId: string): Promise<void> => {
    const db = getDatabase();
    const user = this.state.user;
    try {
      const taskListRef = ref(
        db,
        `task-lists/${user.uid}/${listId}`
      );
      remove(taskListRef);
    } catch (error) {
      console.log(error);
    }
  };

  _submitNewTask = async (listId: string, task: Task): Promise<void> => {
    const user = this.state.user;
    const db = getDatabase();
    try {
      const taskRef = ref(db, `task-lists/${user.uid}/${listId}`)
      const newTaskRef = push(taskRef);
      await set(newTaskRef, {
        heading: task.heading,
        details: task.details,
        date: task.date
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Tasks
        submitNewList={this._submitNewList}
        removeTaskList={this._removeTaskList}
        submitNewTask={this._submitNewTask}
        taskLists={this.state.taskLists}
      />
    );
  }
}

export default TaskContainer;
