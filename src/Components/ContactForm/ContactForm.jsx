import React, { useState } from "react";
import PropTypes from "prop-types";
import { v1 as uuidv4 } from "uuid";
import findContact from "../../helpers/findContact";
import { Lable, Input, Button, Form } from "./ContactForm.styles";

const formInitialState = {
  name: "",
  number: "",
};

const ContactForm = ({ addNewContact, contacts }) => {
  const [form, setForm] = useState(formInitialState);

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { name, number } = form;
    const contact = {
      name,
      number,
      id: uuidv4(),
    };

    const findSimilarName = findContact(contacts, contact);
    if (findSimilarName) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    addNewContact(contact);
    setForm(formInitialState);
  };

  const { name, number } = form;

  return (
    <Form onSubmit={submitHandler}>
      <Lable htmlFor="name">
        Name
        <Input
          name="name"
          type="text"
          value={name}
          onChange={inputHandler}
          autoFocus
        />
      </Lable>

      <Lable htmlFor="number">
        Number
        <Input
          name="number"
          type="text"
          value={number}
          onChange={inputHandler}
        />
      </Lable>

      {name.length >= 1 && number >= 1 ? (
        <Button type="submit" disabled={false}>
          Add contact
        </Button>
      ) : (
        <Button type="submit" disabled={true}>
          Add contact
        </Button>
      )}
    </Form>
  );
};

ContactForm.propTypes = {
  addNewContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default ContactForm;
