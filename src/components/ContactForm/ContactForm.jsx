import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

export function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function resetState() {
    setName('');
    setNumber('');
  }

  function handleInputChange(event) {
    const { name, value } = event.currentTarget;

    if (name === 'name') {
      setName(value);
    }

    if (name === 'number') {
      // Remove non-digit characters from the input value
      const formattedValue = value.replace(/\D/g, '');
      setNumber(formattedValue);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ name: name, number: number });
    resetState();
  }

  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      <label className={styles.FormLabel}>
        <input
          className={styles.FormInput}
          type="text"
          name="name"
          placeholder="name"
          value={name}
          autoComplete="off"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputChange}
        />
      </label>

      <label className={styles.FormLabel}>
        <input
          className={styles.FormInput}
          type="tel"
          name="number"
          placeholder="number"
          value={number}
          autoComplete="off"
          pattern="[0-9]*"
          title="Phone number must contain only digits."
          required
          onChange={handleInputChange}
        />
      </label>
      <button type="submit" className={styles.FormBtn}>
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
