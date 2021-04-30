import React from 'react';
import { getRoomsUseFloor} from './actions/RoomAction';
import { useDispatch, useSelector} from 'react-redux';
import {createSelect} from './Options';
import {unSetVisibleWindow} from './actions/SuccesWindowAction';

const Select = () =>{

const qtyFloorState = useSelector(state => state.FloorReducer.qtyFloor);
const dispatch = useDispatch();

const selectHandler = () => {
    dispatch(unSetVisibleWindow());
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