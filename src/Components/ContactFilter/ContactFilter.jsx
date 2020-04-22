import React from "react";
import PropTypes from "prop-types";
import { Input } from "./ContactFilter.styles";

const ContactFilter = ({ value, changeFilter }) => {
  return (
    <Input
      placeholder="Search name"
      type="text"
      value={value}
      onChange={changeFilter}
    />
  );
};

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
export default ContactFilter;
