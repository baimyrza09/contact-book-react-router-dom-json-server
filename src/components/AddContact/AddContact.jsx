import React, { useContext, useState } from "react";
import { contactsContext } from "../../contexts/ContactsContext";

const AddContact = () => {
  const [contact, setContact] = useState({});
  const { addNewContact, search } = useContext(contactsContext);

  function handleInputsValue(e) {
    let obj = {
      ...contact,
      [e.target.name]: e.target.value,
    };
    setContact(obj);
  }

  function handleClick() {
    addNewContact(contact);
    let newObj = {
      name: "",
      surname: "",
      phone: "",
    };
    setContact(newObj);
  }

  function searchFunc(e) {
    let inp_val = e.target.value;
    search(inp_val)
  }

  return (
    <div>
      <input
        name="name"
        onChange={handleInputsValue}
        type="text"
        placeholder="name"
        value={contact.name}
      />
      <input
        name="surname"
        onChange={handleInputsValue}
        type="text"
        placeholder="surname"
        value={contact.surname}
      />
      <input
        name="phone"
        onChange={handleInputsValue}
        type="text"
        placeholder="phone"
        value={contact.phone}
      />
      <button className="btn btn-primary" onClick={handleClick}>
        Add
      </button>

      <input placeholder="search" onChange={searchFunc} />
    </div>
  );
};

export default AddContact;
