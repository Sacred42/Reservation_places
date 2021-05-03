import React, { useState } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import Portal from '../Portal';
import Ajax from '../services/ajax';
import {changeStatusRoom} from '../actions/RoomAction';
import {setVisibleWindow , unSetVisibleWindow} from  '../actions/SuccesWindowAction';
import {closeModal , openModal} from '../actions/ModalWindowActions';

const Modal = (Child) => {
    // const state = useSelector(state=>state.ModalWindowReducer);
    // const {visible} = state;
    const visible = true;
    // const dispatch = useDispatch();


   
    // const clear = () =>{
    //     dispatch(closeModal());
    // }

    // const success = () => {
    //     dispatch(setVisibleWindow());
    //     clear();
    // }

    // const open = () =>{
    //     dispatch(openModal());
    //     dispatch(unSetVisibleWindow());
    // }

    // const checkWriteIn = () =>{
    //     const fields = document.querySelectorAll('input');
    //     const res = Array.prototype.some.call(fields, (elem)=>elem.value.length === 0);
    //     return res;
    // }


   return(()=>{
    const modal = visible ? (
        <Portal>
            <div className='modal'>
                <div className='modal__window'>
                <div className='modal__exit' >X</div>
                 {Child()}
              
                <div className='modal__footer'>
                </div>
                </div>
            </div>
        </Portal>
    ) : null;
    return(

        <div className='modal__btn'>
        <button >занять место</button>
        {modal}
        </div>
    )
   })
  

}
export default Modal;