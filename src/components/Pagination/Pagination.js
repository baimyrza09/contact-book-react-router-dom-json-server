import React, { useContext, useEffect } from "react";
import { contactsContext } from "../../contexts/ContactsContext";

const Pagination = () => {
  const {contacts, postsPerPage, totalPosts, paginate, getTodosData } = useContext(contactsContext);

  useEffect(() => {
    getTodosData()
  }, [contacts]);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  
  return (
    <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a onClick={() => paginate(number)}
                className="page-link"
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
    </nav>
  );
};

export default Pagination;
