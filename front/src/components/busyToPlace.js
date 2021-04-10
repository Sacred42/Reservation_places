import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import Portal from './portal';
import Ajax from '../components/services/ajax';
import {changeStatusRoom} from './actions/RoomAction';

const Modal = () => {
    const [visible, setVisible] = useState(false);
    const [number, setNumber] = useState(null);
    const [data, setData] = useState(null);
    const dispatch = useDispatch();

  const ajax = new Ajax();

   const loadingData = (e) =>{
        e.preventDefault();
        ajax.changeResource(number, data)
        .then((resource)=>(resource.json()))
        .then((room)=>dispatch(changeStatusRoom(room)))
        .catch((err)=>console.log(err));
    }

   const modal = visible ? (
            <Portal>
                <form onSubmit={loadingData}>
                <div className='modal'>
                    <div className='modal__window'>
                    <div className='modal__exit' onClick={()=>setVisible(false)}>X</div>
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
                    <div>r</div>
                    </div>
                </div>
                </form>
            </Portal>
        ) : null;
        return(

            <div className='modal__btn'>
            <button onClick={()=>setVisible(true)}>занять место</button>
            {modal}
            </div>
        )

}

export default Modal;