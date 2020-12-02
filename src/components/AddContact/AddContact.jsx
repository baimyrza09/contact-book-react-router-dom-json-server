import React, { useContext, useState } from 'react';
import { contactsContext } from '../../contexts/ContactsContext';

const AddContact = () => {
    const [contact, setContact] = useState({});
    const {addNewContact} = useContext(contactsContext)

    function handleInputsValue(e){
        let obj = {
            ...contact,
            [e.target.name]: e.target.value
        }
        setContact(obj)
    }

    return (
        <div>
            <input 
                name="name"
                onChange={handleInputsValue} 
                type="text"
                placeholder="name"
            /> 
            <input 
                name="surname"
                onChange={handleInputsValue} 
                type="text"
                placeholder="surname"
            />
            <input 
                name="phone"
                onChange={handleInputsValue} 
                type="text"
                placeholder="phone"
            />
            <button onClick={() => addNewContact(contact)}>Add</button>
        </div>
    );
};

export default AddContact;