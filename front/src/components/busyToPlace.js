import React, {useEffect, useState } from 'react';
import { useDispatch} from 'react-redux';
import Portal from './portal';
import Ajax from '../components/services/ajax';
import {changeStatusRoom} from './actions/RoomAction';
import {setVisibleWindow , unSetVisibleWindow} from  './actions/SuccesWindowAction';

const Modal = () => {
    const [visible, setVisible] = useState(false);
    const [number, setNumber] = useState(null);
    const [day, setDay] = useState(null);
    const [month, setMonth] = useState(null);
    const [hour, setHour] = useState(null);
    const [minutes, setMinutes] = useState(null);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const ajax = new Ajax();

    //  useEffect(()=>{

    //  }, [error])
   
    const clear = () =>{
        setVisible(false);
        setError(null);
        setNumber(null);
        setDay(null);
        setMonth(null);
        setHour(null);
        setMinutes(null);
    }

    const success = () => {
        dispatch(setVisibleWindow());
        clear();
    }

    const openModal = () =>{
        setVisible(true);
        dispatch(unSetVisibleWindow());
    }

    const checkWriteIn = () =>{
        const fields = document.querySelectorAll('input');
        const res = Array.prototype.some.call(fields, (elem)=>elem.value.length === 0);
        return res;
    }

   const loadingData = (e) =>{
            e.preventDefault();
            if(checkWriteIn()){
                return setError('write in all fields!');
            }
            const activeUser = localStorage.getItem('user')
            const date = [hour , minutes , day , month]
            ajax.changeResource(number, date, activeUser)
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
                    <div className="modal__dates">
                          <header>Дата</header>

                        <div className='modal__dates_day_month'>
                            <span>
                              <div>День</div>
                              <input maxLength="2"   type='text' name='day' id='day' onChange={(e) => setDay(e.target.value)} ></input>
                             </span>
                             <span>
                              <div>Месяц</div>
                              <input maxLength="2"  type='text' name='month' id='month' onChange={(e) => setMonth(e.target.value)} ></input>
                             </span>
                             
                         </div>
                         <div className='modal__dates_day_month'>
                           <span>
                             <div>Часы</div>
                             <input maxLength="2"  type='text' name='hour' id='hour' onChange={(e) => setHour(e.target.value)} ></input>
                          </span>
                          <span>
                             <div>Минуты</div>
                             <input maLength="2"  type='text' name='minutes' id='minutes' onChange={(e) => setMinutes(e.target.value)} ></input>
                        </span>
                          </div>
                    </div>
                          <div> 
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