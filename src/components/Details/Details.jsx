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
                <ul className='list-group mb-3'>
                    <li className='list-group-item'>{newDetails.name}</li>
                    <li className='list-group-item'>{newDetails.surname}</li>
                    <li className='list-group-item'>{newDetails.phone}</li>
                </ul>
                <Link to="/">
                    <button className="btn btn-primary ml-4">back</button>
                </Link>
            </>
            : <h1>Loading...</h1>
            }           
        </div>
    );
};

export default Details;