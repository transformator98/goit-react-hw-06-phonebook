import { useSelector, useDispatch } from 'react-redux';
import s from './Filter.module.css';
import phonebookAction from '../../redux/phonebook/phonebook-actions';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChange = event =>
    dispatch(phonebookAction.changeFilter(event.target.value));
  return (
    <label className={s.label}>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
}
