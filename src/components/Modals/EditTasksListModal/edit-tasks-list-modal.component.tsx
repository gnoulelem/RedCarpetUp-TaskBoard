import React, { useRef, useState } from 'react';
import { AddButton, Loader } from 'components';
import { newListValidator } from 'utils/form-validators';

import closeIcon from 'assets/icons/close-line.svg';
import './edit-tasks-list-modal.styles.scss';

type EditTasksListModalProps = {
  onClose: any;
  submitNewList: any;
};

const EditTasksListModal: React.FC<EditTasksListModalProps> = ({
  onClose,
  submitNewList,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const formErrorRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  const handleNewList = async (e: {
    preventDefault: () => void;
  }): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    const form = formRef.current;
    formErrorRef.current!.innerHTML = '';
    const validationErrors = [...newListValidator(form!['new-list'].value)];
    if (validationErrors.length) {
      validationErrors.forEach((error) => {
        const child = document.createElement('p');
        child.textContent = error;
        child.classList.add('form-error');
        formErrorRef.current!.appendChild(child);
      });
      return;
    }
    await submitNewList(form!['new-list'].value);
    setLoading(false);
    onClose();
  };

  return (
    <div className="edit-tasks-list-modal">
      <div className="edit-tasks-list-modal-content">
        <img
          onClick={onClose}
          style={{ float: 'right' }}
          src={closeIcon}
          alt="Close"
        />
        <form ref={formRef} onSubmit={handleNewList}>
          <div ref={formErrorRef}></div>
          <input type="text" placeholder="New List" name="new-list" />
          <AddButton label="" size="small" />
        </form>
        {loading && (
          <div className="edit-tasks-list-modal-content-loader">
            Adding new list...
          </div>
        )}
      </div>
    </div>
  );
};

export default EditTasksListModal;
