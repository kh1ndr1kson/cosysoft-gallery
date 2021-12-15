import React from 'react';
import {useDispatch} from 'react-redux';

const GalleryItem = ({index, item, setSelectedImg, setDialogShow}) => {
  const dispatch = useDispatch();

  const updatePropsForDialog = (src) => {
    setSelectedImg(src);
    setDialogShow(true);
  };

  const updateItem = (index) => {
    let newTitle = prompt('ENTER NEW TITLE', item.title);

    if (newTitle) {
      dispatch({
        type: 'UPDATE_ITEM',
        payload: {
          id: index,
          title: newTitle
        }
      });
    }
  };

  return (
    <div
      key={index}
      className="item"
    >
      <div className="img-parent">
        <img
          src={item.src}
          alt={item.title}
          onClick={() => updatePropsForDialog(item.src)}
        />
      </div>
      <p>
        {item.title}
        <span
          className="edit-btn"
          title="Изменить"
          onClick={() => updateItem(index)}
        >
          &#9998;
        </span>
      </p>
    </div>
  );
};

export default GalleryItem;