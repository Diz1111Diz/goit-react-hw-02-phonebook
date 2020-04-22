import React, { useState } from "react";

import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
//Helpers
import filterContact from "./helpers/filterContact";

import ContactFilter from "./Components/ContactFilter/ContactFilter";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  const addNewContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (id) => {
    const newState = contacts.filter((contact) => contact.id !== id);
    setContacts(newState);
  };

  const changeFilter = (e) => {
    const name = e.target.value;
    setFilter(name);
  };
  const filteredContact = filterContact(contacts, filter);

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm addNewContact={addNewContact} contacts={contacts} />

      <h2>Contacts</h2>
      <ContactFilter value={filter} changeFilter={changeFilter} />
      <ContactList contacts={filteredContact} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
