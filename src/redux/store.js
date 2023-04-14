import { createStore } from 'redux';

const initialState = {
  selectedCategory: 'ALL',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_CATEGORY':
      return { ...state, selectedCategory: action.category };
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
