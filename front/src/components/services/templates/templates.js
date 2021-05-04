import React from 'react';
const templates = (templ) => {
    console.log('from templ switxh-', templ);
    const {template} = templ;
    switch(template){
        case 'BusyPlace' : 
        return (
            <div>
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
        );
        case 'FromRoom' : 
        return (
            <div>я из комнаты</div>
        )
        default :
         return (<div>ну туда!</div>)
    } 
}

export default templates;