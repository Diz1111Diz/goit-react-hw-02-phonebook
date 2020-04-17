import React from "react";
import PropTypes from "prop-types";
import { Item, Text, Button } from "./Contact.styles";

const ContactItem = ({ name, number, deleteContact }) => {
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
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
