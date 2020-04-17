import React, { useState } from "react";
import { v1 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

import { Title, Input, Button, Form } from "./ContactForm.styles";

const formInitialState = {
  name: "",
  number: "",
};

const ContactForm = ({ addNewContact }) => {
  const [form, setForm] = useState(formInitialState);

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { name, number } = form;
    const contact = { name, number, id: uuidv4() };

    addNewContact(contact);
    setForm(formInitialState);
  };

  const { name, number } = form;

  return (
    <Form onSubmit={submitHandler}>
      <Title>Name</Title>
      <Input
        type="text"
        placeholder="New name"
        name="name"
        value={name}
        onChange={inputHandler}
        autoFocus
        required
      />
      <Title>Number</Title>
      <Input
        type="text"
        placeholder="8-0**-***-**-**"
        name="number"
        value={number}
        onChange={inputHandler}
        required
      />
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

ContactForm.propTypes = {
  addNewContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default ContactForm;
