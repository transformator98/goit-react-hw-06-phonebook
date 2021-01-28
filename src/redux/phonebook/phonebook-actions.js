import types from './phonebook-types';
import { v4 as uuidv4 } from 'uuid';

const addContact = (name, number) => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

// const repeatContact = (name, number) => ({
//   type: types.REPEAT,
//   payload:{
// name, number
// }
// });

const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

const repeatContact = value => ({
  type: types.REPEAT_CONTACT,
  payload: value,
});

export default { addContact, deleteContact, changeFilter, repeatContact };
