import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import DialogWindow from "./DialogWindow";
import GalleryItem from "./GalleryItem";

const Gallery = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.gallery.items);

  const [dialogShow, setDialogShow] = useState(false);
  const [circleBtnCancel, setCircleBtnCancel] = useState(false);
  const [fixedPanel, setFixedPanel] = useState('fixed-panel hide');
  const [selectedImg, setSelectedImg] = useState('');
  const [item, setItem] = useState({
    title: '',
    src: ''
  });

  const toggleFixedClass = () => {
    fixedPanel === 'fixed-panel'
      ? setFixedPanel('fixed-panel hide')
      : setFixedPanel('fixed-panel')

    setCircleBtnCancel(!circleBtnCancel);
  };

  const pushItem = () => {
    dispatch({type: 'PUSH_ITEM', payload: item});
    setItem({title: '', src: ''});
    toggleFixedClass();
  };

  const disabledCheck = () => {
    return !(item.title && item.src)
  }

  return (
    <div>
      <DialogWindow src={selectedImg} dialogShow={dialogShow} setDialogShow={setDialogShow} />
      {items.length > 0 ?
          <div className="grid">
            {items.map((item, index) =>
              <GalleryItem index={index} item={item} setSelectedImg={setSelectedImg} setDialogShow={setDialogShow} />
            )}
          </div>
        :
          <div className="empty-gallery">
            <h1>GALLERY IS EMPTY</h1>
          </div>
      }
      <div className={fixedPanel}>
        <button
          id="showPanel"
          className={circleBtnCancel ? 'cancel' : ''}
          onClick={toggleFixedClass}
        ><span>&#43;</span></button>
        <input
          type="text"
          placeholder="Title"
          value={item.title}
          onChange={(e) => setItem({...item, title: e.target.value})}
        />
        <input
          type="text"
          placeholder="Path"
          value={item.src}
          onChange={(e) => setItem({...item, src: e.target.value})}
        />
        <button
          onClick={pushItem}
          disabled={disabledCheck()}
        >Push image</button>
      </div>
    </div>
  );
};

export default Gallery;