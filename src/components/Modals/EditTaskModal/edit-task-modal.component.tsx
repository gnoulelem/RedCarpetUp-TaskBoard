import React, { useState, useRef } from 'react';
import { taskHeadingValidator } from 'utils/form-validators';

import trashIcon from 'assets/icons/delete-line.svg';
import closeIcon from 'assets/icons/close-line.svg';
import './edit-task-modal.styles.scss';
import { Task } from 'models';

type EditTaskModalProps = {
  onCloseModal: any;
  selectedTaskList: any;
  submitTask: any;
  removeTask: any;
  selectedTask?: any;
};

const EditTaskModal: React.FC<EditTaskModalProps> = ({
  onCloseModal,
  selectedTaskList,
  submitTask,
  removeTask,
  selectedTask,
}) => {
  const [date, setDate] = useState(selectedTask[1]?.date);
  const formRef = useRef<HTMLFormElement>(null);
  const formErrorRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSave = async (e: {
    preventDefault: () => void;
  }): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    const form = formRef.current;
    const validationErrors = [...taskHeadingValidator(form!['heading'].value)];
    if (validationErrors.length) {
      validationErrors.forEach((error) => {
        const child = document.createElement('p');
        child.textContent = error;
        child.classList.add('form-error');
        formErrorRef.current!.appendChild(child);
      });
      return;
    }
    await submitTask(
      selectedTaskList,
      new Task({
        heading: form!['heading'].value,
        details: form!['details'].value,
        date: form!['date'].value,
      }),
      selectedTask[0]
    );
    setLoading(false);
    onCloseModal();
  };

  const handleDelete = async (): Promise<void> => {
    setLoading(true);
    await removeTask(selectedTaskList, selectedTask[0]);
    setLoading(false);
    onCloseModal();
  };

  return (
    <div className="edit-task-modal">
      <div className="edit-task-modal-content">
        <div className="edit-task-modal-content-header">
          <img onClick={handleDelete} src={trashIcon} alt="Delete" />
          <img onClick={onCloseModal} src={closeIcon} alt="Close" />
        </div>
        <div ref={formErrorRef}></div>
        <form ref={formRef} onSubmit={handleSave}>
          <div className="edit-task-modal-content-body">
            <input
              defaultValue={selectedTask[1]?.heading}
              type="text"
              name="heading"
            />
            <textarea
              rows={8}
              placeholder="Add details"
              name="details"
              defaultValue={selectedTask[1]?.details}
            ></textarea>
            <div className="edit-task-modal-content-body-date">
              <div>
                <label htmlFor="date">Add date</label> <br />
                <input
                  name="date"
                  type="date"
                  id="date"
                  defaultValue={selectedTask[1]?.date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <strong>{date}</strong>
            </div>
          </div>
          <div className="edit-task-modal-content-footer">
            <button>Save</button>
          </div>
        </form>
        {loading && (
          <div className="edit-task-modal-content-loader">
            Adding new task...
          </div>
        )}
      </div>
    </div>
  );
};

export default EditTaskModal;
