import React,{useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {contactsContext} from '../../contexts/ContactsContext'


const Details = () => {
    const {detailsContact} = useContext(contactsContext)
    const [newDetails, setNewDetails] = useState(detailsContact)

    useEffect(()=>{
        setNewDetails(detailsContact)
    }, [detailsContact])

    
    return (
        <div>
            {newDetails ? 
            <>
                <ul>
                    <li>{newDetails.name}</li>
                    <li>{newDetails.surname}</li>
                    <li>{newDetails.phone}</li>
                </ul>
                <Link to="/">
                    <button>back</button>
                </Link>
            </>
            : <h1>Loading...</h1>
            }           
        </div>
    );
};

export default Details;