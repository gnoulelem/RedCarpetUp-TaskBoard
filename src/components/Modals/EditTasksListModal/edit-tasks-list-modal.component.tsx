import React from 'react';
import { AddButton } from 'components';

import './edit-tasks-list-modal.styles.scss';

type EditTasksListModalProps = {};

const EditTasksListModal: React.FC<EditTasksListModalProps> = () => {
    return (
        <div className="edit-tasks-list-modal">
            <div className="edit-tasks-list-modal-content">
                <input type="text" value={'Church Build'}/>
                <AddButton label="Add new list" size="small" />
            </div>
        </div>
    );
};

export default EditTasksListModal;