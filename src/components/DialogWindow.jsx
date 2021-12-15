import React from 'react';

const DialogWindow = ({src, dialogShow, setDialogShow}) => {
  if (!dialogShow) return null
  return (
    <div>
      <div className="dialog" onClick={() => setDialogShow(false)}>
        <img src={src} alt="" className="selected-img" onClick={e => e.stopPropagation()}/>
      </div>
    </div>
  );
};

export default DialogWindow;