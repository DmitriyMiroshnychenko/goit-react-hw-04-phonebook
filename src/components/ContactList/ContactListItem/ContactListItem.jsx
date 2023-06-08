import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';
import { MdDelete, MdPerson, MdPhone } from 'react-icons/md';

export function ContactListItem({ id, name, number, onDeleteContact }) {
  return (
    <li className={styles.ContactsItem}>
      <span className={styles['ContactsItem-contact']}>
        <span className={styles['ContactsItem-contact--name']}>
          <MdPerson className={styles['ContactsItem-icon']} />
          {name}
        </span>{' '}
        <span className={styles['ContactsItem-contact--number']}>
          <MdPhone className={styles['ContactsItem-icon']} />
          {number}
        </span>
      </span>
      <button
        type="button"
        className={styles.DeleteBtn}
        onClick={() => onDeleteContact(id)}
      >
        <MdDelete className={styles['ContactsItem-icon']} />
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
