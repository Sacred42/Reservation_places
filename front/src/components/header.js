import React from 'react';
import Modal from './ModalWindow';
import Auth from './Auth';
const Header = () =>{
    return (
        <header className='header'>
            <Modal/>
            <Auth/>
        </header>
    )
}

export default Header;