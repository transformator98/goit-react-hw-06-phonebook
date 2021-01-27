import { combineReducers } from 'redux';
import types from './phonebook-types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    default:
      return state;
  }
};

// const filter = ((state = ''), { type, payload });

// {
//   contacts: {
//     items: [],
//     filter: ''
//   }
// }

export default combineReducers({
  contacts: {
    items,
    // filter,
  },
});
