import React from 'react';
import './OpenModal.scss';

type Props = {
  onClickOpen: () => void;
};

const OpenModal: React.FC<Props> = ({ onClickOpen }) => {
  return (
    <button className="open-modal-btn" onClick={onClickOpen}>
      {' '}
      💻️ Open the window
    </button>
  );
};

export default OpenModal;
