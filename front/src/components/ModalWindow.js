import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import Portal from './Portal';
import Ajax from './services/ajax';
import {changeStatusRoom} from './actions/RoomAction';
import {setVisibleWindow , unSetVisibleWindow} from  './actions/SuccesWindowAction';
import {openWindow , closeWindow} from './actions/ModalWindowActions';
import TemplatesJSX from './services/templates/templatesJSX';
import TemplatesFn from './services/templates/templatesFunctions';

const Modal = () => {
    const [error, setError] = useState(null);
    const state = useSelector(state =>state.ModalWindow)
    const {visible , template} = state;
    const functions = TemplatesFn(template);
    const {request, func} = functions;
    const dispatch = useDispatch();

    
   
    const clear = () =>{
        dispatch(closeWindow());
    }

    const success = () => {
        dispatch(setVisibleWindow());
        clear();
    }

    const openModal = () =>{
        dispatch(openWindow('changeResource'));
        dispatch(unSetVisibleWindow());
    }

    const checkWriteIn = () =>{
        const fields = document.querySelectorAll('input');
        const res = Array.prototype.some.call(fields, (elem)=>elem.value.length === 0);
        return res;
    }

    const parseNodeList = (list) =>{
        const date = {};
        Array.prototype.forEach.call(list, (elem)=>date[elem.name] = elem.value);
        return date;  
    }

   const loadingData = (e) =>{
            e.preventDefault();
            if(checkWriteIn()){
                return setError('write in all fields!');
            }
            const activeUser = localStorage.getItem('user')
            const date = parseNodeList(document.querySelectorAll('input'));
            request(date, activeUser)
            .then((room)=>dispatch(func(room)))
            .then(()=>success())
            .catch(({error})=>setError(error));        
    }

   const modal = visible ? (
            <Portal>
                <form onSubmit={loadingData}>
                <div className='modal'>
                    <div className='modal__window'>
                    <div className='modal__exit' onClick={clear}>X</div>
                    <h3 className='modal__header'>Выберети свободную комнату</h3>
                    <div className='modal__body'>
                    <TemplatesJSX template = {template} />
                    </div>
                    <div className='modal__footer'>
                    
                    <button type='submit'>Забронировать</button>
                    </div>
                    {error && <div className='modal__warning'>{error}</div>}
                    </div>
                </div>
                </form>
            </Portal>
        ) : null;
        return(

            <div className='modal__btn'>
            <button onClick={openModal}>занять место</button>
            {modal}
            </div>
        )

}

export default Modal;