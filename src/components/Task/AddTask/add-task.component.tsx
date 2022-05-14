import React from 'react';
import { AddButton } from 'components';

import './add-task.styles.scss';

type AddTaskProps = {};

const AddTask: React.FC<AddTaskProps> = () => {
    return (
        <div className="add-task">
            <AddButton />
        </div>
    );
};

export default AddTask;