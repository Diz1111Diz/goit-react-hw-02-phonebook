import React from "react";
import PropTypes from "prop-types";
import { Input } from "./Filter.styles";

const Filter = ({ value, changeFilter }) => {
  return (
    <Input
      placeholder="Search name"
      type="text"
      value={value}
      onChange={changeFilter}
    />
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
export default Filter;
