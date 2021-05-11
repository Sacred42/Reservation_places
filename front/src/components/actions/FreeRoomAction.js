import React from 'react';
import Ajax from '../services/ajax';
import {transformResource} from '../services/transformData';

const ajax = new Ajax();

const getRooms = () => (dispatch)=>{
    dispatch({type: 'LOADING_FREE_ROOMS'});
    ajax.getFreeRooms()
    .then((data)=>transformResource(data))
    .then((data)=>dispatch({type: 'SUCCES_FREE_ROOMS' , payload : data}))
    .catch((err)=>dispatch({type: 'FAILURE_FREE_ROOM' , payload: err}))
}

export {getRooms}