import { useState } from 'react';
import './App.scss';

import OpenModal from './OpenModal/OpenModal';
import ModalWindow from './ModalWindow/ModalWindow';

function App() {
  const [open, setOpen] = useState<boolean>(false);

  const onClickOpen = (): void => {
    setOpen(true);
  };

  const onClickClose = (): void => {
    setOpen(false);
  };

  return (
    <div className="app">
      <OpenModal onClickOpen={onClickOpen} />
      <ModalWindow open={open} onClickClose={onClickClose} />
    </div>
  );
}

export default App;
