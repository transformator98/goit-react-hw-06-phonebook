import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import ContactListItem from './ContactListItem';
import { connect } from 'react-redux';
import phonebookAction from '../../redux/phonebook/phonebook-actions';

function ContactList({ contacts, onDeleteContact }) {
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

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};
const mapStateToProps = state => ({
  contacts: state.phonebook.items,
});
const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(phonebookAction.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
