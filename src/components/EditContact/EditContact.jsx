import React, { useContext, useEffect, useState } from "react";
import { contactsContext } from "../../contexts/ContactsContext";

const EditContact = (props) => {
  const { contactToEdit, saveContact } = useContext(contactsContext);
  const [newEditItem, setNewEditItem] = useState(contactToEdit);

  useEffect(() => {
    setNewEditItem(contactToEdit);
  }, [contactToEdit]);

  function handleEditInput(e) {
    let newContact = {
      ...newEditItem,
      [e.target.name]: e.target.value
    };
    setNewEditItem(newContact)
  } 
 

  return (
    <div>
      {newEditItem ? 
        <>
          <input
            value={newEditItem.name}
            type="text"
            name="name"
            onChange={handleEditInput}
            placeholder="name"
          />
          <input
            value={newEditItem.surname}
            type="text"
            name="surname"
            onChange={handleEditInput}
            placeholder="surname"
          />
          <input
           value={newEditItem.phone} 
           type="text"
           name="phone"
           onChange={handleEditInput} 
           placeholder="phone" 
            />
          <button onClick={() => saveContact(newEditItem, props.history)}>Save</button>
        </>
       : 
        <h1>Loading...</h1>
      }
    </div>
  ); 
};

export default EditContact;
