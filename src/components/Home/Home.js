import React from 'react';
import AddContact from '../AddContact/AddContact';
import ContactsList from '../ContactsList/ContactsList';
import Pagination from '../Pagination/Pagination';

const Home = () => {
    return (
        <div>
            <AddContact />
            <ContactsList/>
            <Pagination/>
        </div>
    );
};

export default Home;  