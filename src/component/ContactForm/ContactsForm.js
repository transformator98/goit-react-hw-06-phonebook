import { useState } from 'react';
import PropTypes from 'prop-types';

import s from './ContactsForm.module.css';

export default function ContactsForm({ onAddSubmit, onRepeat }) {
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

  const handleSubmit = event => {
    event.preventDefault();

    onAddSubmit(name, number);
    onRepeat(name, number);

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
ContactsForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
