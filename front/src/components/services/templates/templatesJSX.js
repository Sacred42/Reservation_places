import React from 'react';
const test = () =>{
   const activeRoom = localStorage.getItem('current_room');
   console.log(activeRoom,'from local')
   return activeRoom;
}
const templates = (templ) => {
    const {template} = templ;
    switch(template){
        case 'changeResource' : 
        return (
            <div>
                 <h3 className='modal__header'>Выберети свободную комнату</h3>
                 <div>
                          <div>Комната(номер)</div>
                          <input type='text' name='number' id='number' ></input>
                      </div>
                    <div className="modal__dates">
                          <header>Дата</header>

                        <div className='modal__dates_day_month'>
                            <span>
                              <div>День</div>
                              <input maxLength="2"   type='text' name='day' id='day'  ></input>
                             </span>
                             <span>
                              <div>Месяц</div>
                              <input maxLength="2"  type='text' name='month' id='month' ></input>
                             </span>
                             
                         </div>
                         <div className='modal__dates_day_month'>
                           <span>
                             <div>Часы</div>
                             <input maxLength="2"  type='text' name='hour' id='hour'  ></input>
                          </span>
                          <span>
                             <div>Минуты</div>
                             <input maLength="2"  type='text' name='minutes' id='minutes' ></input>
                        </span>
                          </div>
                          <div className='modal__dates_year'>
                          <div>
                             <div className ='label_year'>Год</div>
                             <div className ='year'>
                             <label>20</label>
                             <input maxLength="2"  type='text' name='year' id='year'  ></input>
                             </div>
                          </div>
                          </div>

                    </div>
                          <div> 
                      </div>
            </div>
        )
        case 'fromRoom' : 
        return (
            <div className = 'modal__change_dates'>
              <h3 className='modal__header'>Изменить дату</h3>
            <div className = 'modal__change_dates_items'>
              <span>
                 <div>День</div>
                 <input name='day' maxlength='2'></input>
              </span>
              <span>
                 <div>Месяц</div>
                 <input name='month' maxlength='2'></input>
              </span>
              <span>
                 <div>Часы</div>
                 <input name='hour' maxlength='2'></input>
              </span>
              <span>
                 <div>Минуты</div>
                 <input name='minutes' maxlength='2'></input>
              </span>
              <span className = 'modal__change_dates_items_year'>
                 <div>Год</div>
                 <input name='year' maxlength='2'></input>
              </span>
            </div>
            <div><input name='room' value={test()}  type='text'/></div>
            </div>
        )
        default :
         return (<div>ну туда!</div>)
    } 
}

export default templates;