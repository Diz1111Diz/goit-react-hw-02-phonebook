import React from "react";
import PropTypes from "prop-types";

import { List } from "./ContactList.styles";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    contacts.length > 0 && (
      <List>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            {...contact}
            deleteContact={() => deleteContact(contact.id)}
          ></Contact>
        ))}
      </List>
    )
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
