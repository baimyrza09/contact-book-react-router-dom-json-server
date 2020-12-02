import React from 'react';
import AddContact from '../AddContact/AddContact';
import ContactsList from '../ContactsList/ContactsList';

const Home = () => {
    return (
        <div>
            <AddContact />
            <ContactsList/>
        </div>
    );
};

export default Home;  