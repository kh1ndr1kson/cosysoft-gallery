const defaultState = {
  items: localStorage.getItem('items')
    ? JSON.parse(localStorage.getItem('items'))
    : []
};

export const galleryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_GALERY':
      return state.items
    case 'PUSH_ITEM':
      let arr = localStorage.getItem('items') !== null
        ? JSON.parse(localStorage.getItem('items'))
        : []

      arr.push(action.payload);
      localStorage.setItem('items', JSON.stringify(arr));

      return {...state, items: [...state.items, action.payload]}
    case 'UPDATE_ITEM':
      let newArray = [...state.items];

      newArray[action.payload.id].title = action.payload.title;
      localStorage.setItem('items', JSON.stringify(newArray));

      return {...state, items: newArray}
    default:
      return state;
  }
};