import React from "react";
import PropTypes from "prop-types";
import { Item, Text, Button } from "./ContactItem.styles";

const ContactItem = ({ contact, deleteContact }) => {
  const { name, number } = contact;
  return (
    <Item>
      <Text>
        {name}: {number}
      </Text>
      <Button onClick={deleteContact}>Delete</Button>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
