import React, {useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
import Portal from './portal';
import Ajax from '../components/services/ajax';
import {changeStatusRoom} from './actions/RoomAction';
import {setVisibleWindow , unSetVisibleWindow} from  './actions/SuccesWindowAction';

const Modal = () => {
    const [visible, setVisible] = useState(false);
    const [number, setNumber] = useState(null);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const ajax = new Ajax();

   
    const clear = () =>{
        setVisible(false);
        setError(null);
        setNumber(null);
        setData(null);
    }

    const success = () => {
        dispatch(setVisibleWindow());
        clear();
    }

    const openModal = () =>{
        setVisible(true);
        dispatch(unSetVisibleWindow());
    }

   const loadingData = (e) =>{
        e.preventDefault();
        ajax.changeResource(number, data)
        .then((room)=>dispatch(changeStatusRoom(room)))
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
                      <div>
                          <div>Комната(номер)</div>
                          <input type='text' name='number' id='number' onChange={(e) => setNumber(e.target.value)} ></input>
                      </div>
                      <div>
                          <div>Время</div>
                          <input type='text' name='time' id='number' onChange={(e) => setData(e.target.value)}></input>
                      </div>
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