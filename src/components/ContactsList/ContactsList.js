import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { contactsContext } from "../../contexts/ContactsContext";

const ContactsList = () => {
  const { contacts, getTodosData, deleteContact, EditContact, details } = useContext(
    contactsContext
  );

  useEffect(() => {
    getTodosData();
  }, []);
  return (
    <ul>
      {contacts.map((item) => (
        <li key={item.id}>
          {item.name} 
          <button onClick={() => deleteContact(item.id)}>delete</button>
          <Link to="/edit">
            <button onClick={() => EditContact(item.id)}>edit</button>
          </Link>
          <Link to="/details">
            <button onClick={() => details(item.id)}>details</button>
          </Link>

        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
