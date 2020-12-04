import React, { useContext, useEffect, useState } from "react";
import { contactsContext } from "../../contexts/ContactsContext";

const EditContact = (props) => {
  const { contactToEdit, saveContact } = useContext(contactsContext);
  const [newEditItem, setNewEditItem] = useState(contactToEdit);
  const [index, setIndex] = useState(-1);

  let titles = ["Privet", "Poka"];

  useEffect(() => {
    setNewEditItem(contactToEdit);
  }, [contactToEdit]);

  function handleEditInput(e) {
    let newContact = {
      ...newEditItem,
      [e.target.name]: e.target.value,
    };
    setNewEditItem(newContact);
  }

  return (
    <div
      onMouseOver={() => console.log("ХаюХай")}
      style={{ paddingTop: "50px" }}
    >
      {newEditItem ? (
        <>
          <input
            value={newEditItem.name}
            type="text"
            name="name"
            onChange={handleEditInput}
            placeholder="name"
            onMouseOver={()=>setIndex(0)}
          />
          <input
            value={newEditItem.surname}
            type="text"
            name="surname"
            onChange={handleEditInput}
            placeholder="surname"
            onMouseOver={()=>setIndex(1)}
          />
          <input
            value={newEditItem.phone}
            type="text"
            name="phone"
            onChange={handleEditInput}
            placeholder="phone"
          />
          <button  className="btn btn-primary ml-4" onClick={() => saveContact(newEditItem, props.history)}>
            Save
          </button>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
      <div>{titles[index]}</div>
    </div>
  );
};

export default EditContact;
