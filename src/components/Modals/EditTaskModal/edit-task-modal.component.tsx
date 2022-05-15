import React, {useState} from 'react';

import trashIcon from 'assets/icons/delete-line.svg';
import closeIcon from 'assets/icons/close-line.svg';
import './edit-task-modal.styles.scss';

type EditTaskModalProps = {};

const EditTaskModal: React.FC<EditTaskModalProps> = () => {
    const [date, setDate] = useState('');

  return (
    <div className="edit-task-modal">
      <div className="edit-task-modal-content">
        <div className="edit-task-modal-content-header">
          <img src={trashIcon} alt="Delete" />
          <img src={closeIcon} alt="Close" />
        </div>
        <div className="edit-task-modal-content-body">
            <input type="text" value={'Church Build'}/>
            <textarea rows={8} placeholder="Add details"></textarea>
            <div className="edit-task-modal-content-body-date">
                <div>
                    <label htmlFor="date">Add date</label> <br />
                    <input type="date" id="date" onChange={(e) => setDate(e.target.value)}/>
                </div>
                <strong>{date}</strong>
            </div>
        </div>
        <div className="edit-task-modal-content-footer">
          <button>Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
