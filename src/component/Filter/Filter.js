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

const mapStateToProps = state => ({
  value: state.contacts.filter,
});
const mapDispatchToProps = dispatch => ({
  onChange: event => dispatch(phonebookAction.changeFilter(event.target.value)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
