import React, { useState } from 'react';
import Portal from './portal';
import Ajax from '../src/services/ajax';

class Modal extends React.Component {
    state ={
        visible : false
    }

    ajax = new Ajax();

    loadingData = (e) =>{
        e.preventDefault();
        this.ajax.changeResource()
        .then((resource)=> resource.json)
        .then((data)=>console.log(data));
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
                <form onSubmit={this.loadingData}>
                <div className='modal'>
                    <div className='modal__window'>
                    <div className='modal__exit' onClick={this.hideModal}>X</div>
                    <h3 className='modal__header'>Выберети свободную комнату</h3>
                    <div className='modal__body'>
                      <div>
                          <div>Комната(номер)</div>
                          <input type='text' name='number' id='number'></input>
                      </div>
                      <div>
                          <div>Время</div>
                          <input type='text' name='time' id='number'></input>
                      </div>
                    </div>
                    <div className='modal__footer'>
                    <button type='submit'>Забронировать</button>
                    </div>
                    </div>
                </div>
                </form>
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