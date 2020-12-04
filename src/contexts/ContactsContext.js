import axios from "axios";
import React, { useReducer, useState } from "react";

export const contactsContext = React.createContext();

let API = "http://localhost:8000/contacts";

const INIT_STATE = {
  contacts: [],
  contactToEdit: null,
  details: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CONTACTS_DATA":
      return { ...state, contacts: action.payload };
    case "EDIT_CONTACT":
      return { ...state, contactToEdit: action.payload };
    case "DETAILS_CONTACT":
      return { ...state, details: action.payload };
    default:
      return state;
  }
};

const ContactsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [inpVal, setInpVal] = useState('')

  const getTodosData = async () => {
    let { data } = await axios(`http://localhost:8000/contacts?q=${inpVal}`);
    dispatch({
      type: "GET_CONTACTS_DATA",
      payload: data,
    });
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = state.contacts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  function addNewContact(newContact) {
    axios.post(API, newContact);
    getTodosData();
  }

  const deleteContact = async (id) => {
    await axios.delete(API + "/" + id);
    getTodosData();
  };

  const EditContact = async (id) => {
    let { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "EDIT_CONTACT",
      payload: data,
    });
  };

  const saveContact = async (newContact, history) => {
    axios.patch(API + "/" + newContact.id, newContact);
    history.push("/");
  };

  const details = async (id) => {
    let { data } = await axios(API + "/" + id);
    dispatch({
      type: "DETAILS_CONTACT",
      payload: data,
    });
  };

  function search(inp_val){
    setInpVal(inp_val)
  }

  return (
    <contactsContext.Provider
      value={{
        contacts: state.contacts,
        contactToEdit: state.contactToEdit,
        detailsContact: state.details,
        totalPosts: state.contacts.length,
        postsPerPage,
        currentPosts,
        addNewContact,
        getTodosData,
        deleteContact,
        EditContact,
        saveContact,
        details,
        setCurrentPage,
        paginate,
        search
      }}
    >
      {children}
     
    </contactsContext.Provider>
  );
};

export default ContactsContextProvider;
