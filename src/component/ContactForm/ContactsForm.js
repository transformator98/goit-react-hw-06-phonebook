import { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux';
import phonebookAction from '../../redux/phonebook/phonebook-actions';

import s from './ContactsForm.module.css';

function ContactsForm({ onAddSubmit, onRepeat }) {
  // const items = useSelector(state.contacts.item);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  // const repeatContact = name => {
  //   const repeatName = name.toLowerCase();
  //   return items.find(contact => contact.name === repeatName);
  // };

  const handleSubmit = event => {
    event.preventDefault();

    onAddSubmit(name, number);

    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          placeholder="Name contact"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <label className={s.label}>
        Number
        <input
          className={s.input}
          type="number"
          name="number"
          placeholder="Number contact"
          value={number}
          onChange={handleInputChange}
        />
      </label>

      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

const mapDispatchToProps = dispatch => ({
  onAddSubmit: (name, number) =>
    dispatch(phonebookAction.addContact(name, number)),
});

ContactsForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
export default connect(null, mapDispatchToProps)(ContactsForm);
