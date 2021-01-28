import { combineReducers } from 'redux';
import types from './phonebook-types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [payload, ...state];

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

// const items = (state = [], action) => {
//   return state;
// };
const filter = (state = '', action) => {
  return state;
};

export default combineReducers({
  items,
  filter,
});
