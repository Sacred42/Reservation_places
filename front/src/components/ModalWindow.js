import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import Portal from './Portal';
import {setVisibleWindow , unSetVisibleWindow} from  './actions/SuccesWindowAction';
import {openWindow , closeWindow} from './actions/ModalWindowActions';
import TemplatesJSX from './services/templates/templatesJSX';
import TemplatesFn from './services/templates/templatesFunctions';

const Modal = () => {
    const [error, setError] = useState(null);
    const [activeUser, setActiveUser] = useState(null)
    const state = useSelector(state=>state)
    const {visible , template} = state.ModalWindow;
    const {isAdmin} = state.isAdminReducer;
    const functions = TemplatesFn(template);
    const {request, func} = functions;
    const dispatch = useDispatch();
    const user = isAdmin ? activeUser : localStorage.getItem('user') ;

    
   
    const clear = () =>{
        dispatch(closeWindow());
        setError(null);
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
        const fields = document.querySelectorAll('.modal__dates__for_change');
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
            const date = parseNodeList(document.querySelectorAll('.modal__dates__for_change'));
            request(date, user)
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
                    <div className='modal__body'>
                    <TemplatesJSX template = {template}/>
                    </div>
                    <div className='modal__footer'>
                    
                    <button type='submit'>Забронировать</button>
                    {(isAdmin && template === 'changeResource') && <input type='text' className='admin_user modal__dates__for_change' onChange={(e)=>setActiveUser(e.target.value)}></input>}
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