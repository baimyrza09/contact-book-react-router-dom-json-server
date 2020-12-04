import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { contactsContext } from "../../contexts/ContactsContext";

const ContactsList = () => {
  const { currentPosts, getTodosData, deleteContact, EditContact, details } = useContext(
    contactsContext
  );


  useEffect(() => {
    getTodosData();
  }, []);
  return (
    <ul className='list-group mb-3'>
      {currentPosts.map((item) => (
        <li key={item.id} className='list-group-item'>
          {item.name} 
          <button className="btn btn-primary ml-4" onClick={() => deleteContact(item.id)}>delete</button>
          <Link to="/edit">
            <button className="btn btn-primary" onClick={() => EditContact(item.id)}>edit</button>
          </Link>
          <Link to="/details">
            <button className="btn btn-primary" onClick={() => details(item.id)}>details</button>
          </Link>

        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
