import React from 'react';
import {useSelector} from 'react-redux';
import Modal from './ModalWindow';
import Logout from './Auth/Logout';
import SignIn from './Auth/SignIn';
const Header = () =>{
    const state = useSelector(state=>state.isAdminReducer);
    const {isAdmin} = state;
    return (
        <header className='header'>
            <Modal/>
            {isAdmin ? <Logout/> : <SignIn/>}
        </header>
    )
}

export default Header;