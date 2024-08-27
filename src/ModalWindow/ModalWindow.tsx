import cn from 'classnames';
import React from 'react';
import './ModalWindow.scss';

type Props = {
  open: boolean;
  onClickClose: () => void;
};

const ModalWindow: React.FC<Props> = ({ open, onClickClose }) => {
  return (
    <div className={cn('overlay animated', { show: open })}>
      <div className="modal">
        <svg
          height="200"
          viewBox="0 0 200 200"
          width="200"
          onClick={onClickClose}
        >
          <title />
          <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
        </svg>
        <img src="https://i.gifer.com/Aq.gif" />
      </div>
    </div>
  );
};

export default ModalWindow;
