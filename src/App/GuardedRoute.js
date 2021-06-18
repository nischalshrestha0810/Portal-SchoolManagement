import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Modal from '../Shared/components/Modal/Modal';
import {useState} from 'react';

const GuardedRoute = ({ component: Component, isLoggedIn: isLoggedIn, ...rest }) => {
    const [modalIsOpen,setIsOpen] = useState(true);
  const openModal= ()=> {
    setIsOpen(true);
  }

  const closeModal= ()=> {
    setIsOpen(false);
  }
    return (
        <Route {...rest} render={(props) => (
            isLoggedIn === true ? <Component {...props} /> : 
            <Modal handleClose={closeModal} children={"unauthorized"} show={modalIsOpen}>
            </Modal>
        )} />
    )
}

export default GuardedRoute;