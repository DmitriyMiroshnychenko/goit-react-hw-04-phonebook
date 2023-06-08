import PropTypes from 'prop-types';
import styles from './Filter.module.css';

export function Filter({ onFilterInputChange, value }) {
  return (
    <label className={styles.FilterLabel}>
      <input
        className={styles.FilterInput}
        type="text"
        name="filter"
        placeholder="find contacts by name"
        value={value}
        onChange={onFilterInputChange}
      ></input>
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterInputChange: PropTypes.func.isRequired,
};
