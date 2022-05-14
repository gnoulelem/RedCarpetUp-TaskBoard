import React from 'react';
import { Tasks } from 'components';

type TaskContainerProps = {};

class TaskContainer extends React.Component<TaskContainerProps> {
  constructor(props: TaskContainerProps) {
    super(props);
    this.state = {};
  }

  render() {
    return <Tasks />;
  }
}

export default TaskContainer;
