import React, { useState } from 'react';
import Portal from './portal';

class Modal extends React.Component {
    state ={
        visible : false
    }

    
    showModal = () =>{
        this.setState({visible : true});
    }

    hideModal = () =>{
        this.setState({visible : false});
    }


    render(){
       const modal = this.state.visible ? (
            <Portal>
                <div className='modal'>
                    <div className='modal__window'>
                    <div className='modal__exit' onClick={this.hideModal}>X</div>
                    <h3 className='modal__header'>Выберети свободную комнату</h3>
                    <div className='modal__body'>
                      <div>
                          <div>Комната(номер)</div>
                          <input type='text'></input>
                      </div>
                      <div>
                          <div>Время</div>
                          <input type='text'></input>
                      </div>
                    </div>
                    <div className='modal__footer'>
                    <button>Забронировать</button>
                    </div>
                    </div>
                </div>
            </Portal>
        ) : null;
        return(
            <div className='modal__btn'>
            <button onClick={this.showModal}>занять место</button>
            {modal}
            </div>
        )
    }

}

export default Modal;