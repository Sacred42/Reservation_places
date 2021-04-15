import React, { useEffect } from 'react';
import Ajax from "./services/ajax";
import { getRoomsUseFloor} from './actions/RoomAction';
import {connect, useDispatch, useSelector} from 'react-redux';
import {createSelect} from './Options';

const Select = () =>{
const qtyFloorState = useSelector(state => state.FloorReducer.qtyFloor);
const dispatch = useDispatch();
const ajax = new Ajax();

const selectHandler = () => {
    const sel = document.querySelector('.selectFloor').selectedIndex; 
    dispatch(getRoomsUseFloor(sel + 1));
}

return (
    <select className='selectFloor' onChange={selectHandler}>
         {createSelect(qtyFloorState)}
    </select>
    )
}

export default Select;