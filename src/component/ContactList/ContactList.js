import { useSelector, useDispatch } from 'react-redux';
import s from './ContactList.module.css';
import ContactListItem from './ContactListItem';
import phonebookAction from '../../redux/phonebook/phonebook-actions';
import { getVisibleContact } from '../../redux/phonebook/phonebook-selectors';

export default function ContactList() {
  const contacts = useSelector(getVisibleContact);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(phonebookAction.deleteContact(id));
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          id={id}
          key={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
}
