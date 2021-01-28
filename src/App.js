import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

import ContactsForm from './component/ContactForm';
import Filter from './component/Filter';
import ContactList from './component/ContactList';
import Container from './component/Container';

export default function App() {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  // });
  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const repeatContact = (name, number) => {
  //   const repeatNameAndNumber = !!contacts.find(
  //     contact => contact.name === name || contact.number === number,
  //   );

  //   return repeatNameAndNumber;
  // };

  // const addContact = (name, number) => {
  //   const repeat = repeatContact(name, number);
  //   if (name.length < 2) {
  //     alert(`Текст должен быть не меньше 2 символов, сейчас ${name.length}`);
  //     return;
  //   }

  //   if (number.length < 5) {
  //     alert(`Номер должен быть не меньше 5 символов, сейчас ${number.length}`);
  //     return;
  //   }
  //   const contact = {
  //     id: uuidv4(),
  //     name,
  //     number,
  //   };

  //   repeat
  //     ? alert(`${name} is already exist!`)
  //     : setContacts(state => [contact, ...state]);
  // };

  // const deleteContact = contactId => {
  //   setContacts(contacts.filter(contact => contact.id !== contactId));
  // };
  // const changeFilter = event => {
  //   setFilter(event.target.value);
  // };

  // const getVisibleContact = () => {
  //   const normalizeFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizeFilter),
  //   );
  // };

  return (
    <Container className="container">
      <h1>Phonebook</h1>
      <ContactsForm
      // onAddSubmit={addContact}
      // onRepeat={repeatContact}
      />
      <h2>Contact</h2>
      <Filter
      // value={filter} onChange={changeFilter}
      />

      <ContactList
      // contacts={getVisibleContact()}
      // onDeleteContact={deleteContact}
      />
    </Container>
  );
}
