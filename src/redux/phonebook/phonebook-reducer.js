import { combineReducers } from 'redux';
import types from './phonebook-types';

const items = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      return [payload, ...state];

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
