import { useState, useEffect } from 'react';
import { Container } from './Container';
import { Section } from './Section';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Notification } from './Notification';
import { Filter } from './Filter';
import { customAlphabet } from 'nanoid';

const nanoid = customAlphabet('1234567890', 8);

export function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  function handleFormSubmit({ name, number }) {
    const data = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(data.name + ' is already in contacts.');
    } else {
      setContacts(prevState => [...prevState, data]);
    }
  }

  function handleFilterInputChange(event) {
    const { value } = event.currentTarget;
    setFilter(value);
  }

  function filterContacts() {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }

  function deleteContact(contactId) {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  }

  return (
    <Container>
      <Section tag={'h1'} title={'Phonebook'}>
        <ContactForm onSubmit={handleFormSubmit} />
      </Section>

      <Section tag={'h2'} title={'Contacts'}>
        {contacts.length === 0 ? (
          <Notification message={'*No contacts added*'} />
        ) : (
          <>
            <Filter
              onFilterInputChange={handleFilterInputChange}
              value={filter}
            />

            <ContactList
              contactsList={filterContacts()}
              onDeleteContact={deleteContact}
            />
          </>
        )}
      </Section>
    </Container>
  );
}
