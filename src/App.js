import React, { useState } from "react";

import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
import Filter from "./Components/Filter/Filter";

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

  const filterContact = (arr, filter) => {
    return arr.filter((el) =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const changeFilter = (e) => {
    const name = e.target.value;
    setFilter(name);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm addNewContact={addNewContact} />

      <h2>Contacts</h2>
      <Filter value={filter} changeFilter={changeFilter} />
      <ContactList
        contacts={filterContact(contacts, filter)}
        deleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
