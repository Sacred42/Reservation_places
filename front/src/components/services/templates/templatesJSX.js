import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {openWindow} from '../../actions/ModalWindowActions';
import GetFreeRoom from '../../GetFreeRooms';

const test = () =>{
   const activeRoom = localStorage.getItem('current_room');
   return activeRoom;
}



const Templates = (templat ) => {
    console.log(templat ,'Новый шаблон');
    const {template :{adtn, templ}} = templat;
    const state = useSelector(state=>state);
    const dispatch = useDispatch();
    const {isAdmin} = state.isAdminReducer;
    const [status , setStatus] = useState('free');
    const activeFloor = localStorage.getItem('current_floor');
    const openModal = (status) =>{
      setStatus(status);
      dispatch(openWindow({templ : 'createRoom' , adtn : null}));
     }
     
    
    switch(templ){
        case 'busyPlaceNA' : 
        return (
            <div>
                  <h3 className='modal__header'>Выберети свободную комнату</h3>
                  <div>
                     <div>Комната(номер)</div>
                     <input className='modal__dates__for_change' type='text' name='number' id='number' ></input>
                  </div>
                  <header>Дата</header>
                  <div className="modal__dates modal__dates_flex">
                     <div>
                        <div className='modal__dates_day_month'>
                            <span>
                              <div>День</div>
                              <input className='modal__dates__for_change' maxLength="2"   type='text' name='day' id='day'  ></input>
                             </span>
                             <span>
                              <div>Месяц</div>
                              <input className='modal__dates__for_change' maxLength="2"  type='text' name='month' id='month' ></input>
                             </span>
                             
                         </div>
                         <div className='modal__dates_day_month'>
                           <span>
                             <div>Часы</div>
                             <input className='modal__dates__for_change' maxLength="2"  type='text' name='hour' id='hour'  ></input>
                          </span>
                          <span>
                             <div>Минуты</div>
                             <input className='modal__dates__for_change' maxLength="2"  type='text' name='minutes' id='minutes' ></input>
                        </span>
                          </div>
                          <div className='modal__dates_year'>
                          <div>
                             <div className ='label_year'>Год</div>
                             <div className ='year'>
                             <label>20</label>
                             <input className='modal__dates__for_change' maxLength="2"  type='text' name='year' id='year'  ></input>
                             </div>
                          </div>
                          </div>
                        </div>
      
                          <div><GetFreeRoom/></div>

                    </div>
                          <div> 
                      </div>
            </div>
        );

        case 'busyPlaceA' :
           return(
            <div>
            <h3 className='modal__header'>Выберети свободную комнату</h3>
               <div className="modal__dates">
                     <header>Дата</header>

                   <div className='modal__dates_day_month'>
                       <span>
                         <div>День</div>
                         <input className='modal__dates__for_change' maxLength="2"   type='text' name='day' id='day'  ></input>
                        </span>
                        <span>
                         <div>Месяц</div>
                         <input className='modal__dates__for_change' maxLength="2"  type='text' name='month' id='month' ></input>
                        </span>
                        
                    </div>
                    <div className='modal__dates_day_month'>
                      <span>
                        <div>Часы</div>
                        <input className='modal__dates__for_change' maxLength="2"  type='text' name='hour' id='hour'  ></input>
                     </span>
                     <span>
                        <div>Минуты</div>
                        <input className='modal__dates__for_change' maxLength="2"  type='text' name='minutes' id='minutes' ></input>
                   </span>
                     </div>
                     <div className='modal__dates_year'>
                     <div>
                        <div className ='label_year'>Год</div>
                        <div className ='year'>
                        <label>20</label>
                        <input className='modal__dates__for_change' maxLength="2"  type='text' name='year' id='year'  ></input>
                        </div>
                     </div>
                     </div>
                     <div className = 'modal__change_dates_item' ><input className='modal__dates__for_change'  name='number' value={test()}  type='text'/></div>
               </div>
                     <div> 
                 </div>
                 <div>
                    <label className='user_label'>Пользователь</label>
                    <input type='text' className='admin_user modal__dates__for_change'></input>
                 </div>
                
       </div>
           )

        case 'createDate' : 
        return (
            <div className = 'modal__change_dates'>
              <h3 className='modal__header'>Изменить дату</h3>
            <div className = 'modal__change_dates_items'>
              <span>
                 <div>День</div>
                 <input className='modal__dates__for_change' name='day' maxLength='2'></input>
              </span>
              <span>
                 <div>Месяц</div>
                 <input className='modal__dates__for_change' name='month' maxLength='2'></input>
              </span>
              <span>
                 <div>Часы</div>
                 <input className='modal__dates__for_change' name='hour' maxLength='2'></input>
              </span>
              <span>
                 <div>Минуты</div>
                 <input className='modal__dates__for_change' name='minutes' maxLength='2'></input>
              </span>
              <span className = 'modal__change_dates_items_year'>
                 <div>Год</div>
                 <input className='modal__dates__for_change' name='year' maxLength='2'></input>
              </span>
            </div>
            <div className = 'modal__change_dates_item' ><input className='modal__dates__for_change' readOnly name='room' value={test()}  type='text'/></div>
            </div>
        )
        case 'changeUser' :
           return(
              <div>
                 <h3 className='modal__header'>Изменить дату</h3>
                 <div>
                    <label className='user_label'>Пользователь</label>
                    <input className='modal__dates__for_change' name='user'></input>
                 </div>
                 <div className = 'modal__change_dates_item' ><input className='modal__dates__for_change'  name='room' value={test()}  type='text'/></div>
              </div>
           )
         case 'createRoom' : 
           return(
           
            <div>
                <h3 className='modal__header'>Создать комнату</h3>
                <div>
                   <label>Номер</label>
                   <input className='modal__dates__for_change' type='text' name='number'></input>
                </div>
                <div>
                   <label>Статус</label>
                   <select className='modal__dates__for_change' name='status' select={status} value={status} onChange={(e)=>openModal(e.target.value)}>
                      <option>free</option>
                      <option>busy</option>
                   </select>
                   <div className = 'modal__change_dates_item'><input className='modal__dates__for_change' type='text'  name='floor' value={activeFloor}></input></div>
                </div>
                {(status === 'busy' && 
                <div>
                       <div className="modal__dates">
                       <header>Дата</header>

                     <div className='modal__dates_day_month'>
                         <span>
                           <div>День</div>
                           <input className='modal__dates__for_change' maxLength="2"   type='text' name='day' id='day'  ></input>
                          </span>
                          <span>
                           <div>Месяц</div>
                           <input className='modal__dates__for_change' maxLength="2"  type='text' name='month' id='month' ></input>
                          </span>
                          
                      </div>
                      <div className='modal__dates_day_month'>
                        <span>
                          <div>Часы</div>
                          <input className='modal__dates__for_change' maxLength="2"  type='text' name='hour' id='hour'  ></input>
                       </span>
                       <span>
                          <div>Минуты</div>
                          <input className='modal__dates__for_change' maxLength="2"  type='text' name='minutes' id='minutes' ></input>
                     </span>
                       </div>
                       <div className='modal__dates_year'>
                       <div>
                          <div className ='label_year'>Год</div>
                          <div className ='year'>
                          <label>20</label>
                          <input className='modal__dates__for_change' maxLength="2"  type='text' name='year' id='year'  ></input>
                          </div>
                       </div>
                       </div>
                 </div>
                 <label className='user_label'>Пользователь</label>
                 <input type='text' className='admin_user modal__dates__for_change'></input>
                  </div>
                  
               
                )}
            </div>
            
         )
        default :
         return (<div>ну туда!</div>)
    } 
}

export default Templates;