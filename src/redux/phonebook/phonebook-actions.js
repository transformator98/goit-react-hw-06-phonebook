import { v4 as uuidv4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('phonebook/Add', (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deleteContact = createAction('phonebook/Delete');
const changeFilter = createAction('phonebook/ChangeFilter');

const contactActions = { addContact, deleteContact, changeFilter };
export default contactActions;
