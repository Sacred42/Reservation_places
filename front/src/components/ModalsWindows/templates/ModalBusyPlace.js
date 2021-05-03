import React, { useState } from 'react';
import Ajax from '../../services/ajax';
import { useDispatch , useSelector} from 'react-redux';
import {closeModal , openModal} from '../../actions/ModalWindowActions';
import {changeStatusRoom} from '../../actions/RoomAction';
import ModalBase from '../ModalWindow';

const ModalBusyPlace = () =>{
    // const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const ajax = new Ajax();

    const loadingData = (e) =>{
        e.preventDefault();
        const activeUser = localStorage.getItem('user')
        const hour = document.querySelector('#hour');
        const minutes = document.querySelector('#minutes');
        const day = document.querySelector('#day');
        const month = document.querySelector('#month');
        const number = document.querySelector('#number');
        const year = document.querySelector('#year');
        const date = [hour , minutes , day , month , `20${year}`]
        ajax.changeResource(number, date, activeUser)
        .then((room)=>dispatch(changeStatusRoom(room)))
        .then(()=>dispatch(closeModal()))
        .catch(({error})=>setError(error));        
}
    return(
        <form onSubmit={loadingData}>
              <h3 className='modal__header'>Выберети свободную комнату</h3>
                    <div className='modal__body'>
                      <div>
                          <div>Комната(номер)</div>
                          <input type='text' name='number' id='number'></input>
                      </div>
                    <div className="modal__dates">
                          <header>Дата</header>

                        <div className='modal__dates_day_month'>
                            <span>
                              <div>День</div>
                              <input maxLength="2"   type='text' name='day' id='day'></input>
                             </span>
                             <span>
                              <div>Месяц</div>
                              <input maxLength="2"  type='text' name='month' id='month'></input>
                             </span>
                             
                         </div>
                         <div className='modal__dates_day_month'>
                           <span>
                             <div>Часы</div>
                             <input maxLength="2"  type='text' name='hour' id='hour'></input>
                          </span>
                          <span>
                             <div>Минуты</div>
                             <input maLength="2"  type='text' name='minutes' id='minutes'></input>
                        </span>
                          </div>
                          <div className='modal__dates_year'>
                          <div>
                             <div className ='label_year'>Год</div>
                             <div className ='year'>
                             <label>20</label>
                             <input maxLength="2"  type='text' name='year' id='year' ></input>
                             </div>
                          </div>
                          </div>

                    </div>
                          <div> 
                      </div>
                    </div>
                    <button type='submit'>Забронировать</button>
                    {/* {error && <div className='modal__warning'>{error}</div>} */}
        </form>
    )
}

export default ModalBase(ModalBusyPlace);