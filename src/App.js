import './App.css';

import ContactsForm from './component/ContactForm';
import Filter from './component/Filter';
import ContactList from './component/ContactList';
import Container from './component/Container';

export default function App() {
  return (
    <Container className="container">
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contact</h2>
      <Filter />

      <ContactList />
    </Container>
  );
}
