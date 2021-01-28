import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import s from './Filter.module.css';
import phonebookAction from '../../redux/phonebook/phonebook-actions';

const Filter = ({ value, onChange }) => (
  <label className={s.label}>
    Find contacts by name
    <input type="text" value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
// const getVisibleContact = () => {
//   const normalizeFilter = filter.toLowerCase();

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizeFilter),
//   );
// };

const mapStateToProps = state => ({
  value: state.phonebook.filter,
});
const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(phonebookAction.changeFilter(event.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
