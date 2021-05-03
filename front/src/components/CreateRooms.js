import React from 'react';
import Ajax from './services/ajax';
import {unBusyPlace} from './actions/RoomAction';
import { useDispatch } from 'react-redux';
import {openModal} from './actions/ModalWindowActions';


const ViewRoom = (props) => {
const {rooms , value} = props;
const ajax = new Ajax();
const dispatch = useDispatch();

const unBusy = (room) =>{
   
   ajax.unBusyPlace(room)
   .then((data)=>dispatch(unBusyPlace(data)))
   .catch(err=>err);
   
}

const test = () =>{
  dispatch(openModal({g:1}))
}

const changeDate = (room) =>{
  ajax.changeDate(room)
  .then((date)=>console.log(date));
}

const createRoom = (room) =>{  // формирование комнаты
 const arrRooms = [];
 const currentaFloor = localStorage.getItem('current_floor'); 
 room.forEach((elem)=>{
     if(elem.floor === `${currentaFloor} этаж`){
      const ActiveUser = localStorage.getItem('user') === elem.user;
      arrRooms.push(<li className={`place place__${elem.status}`} key={elem.room}>
       <div>{elem.room}</div>
       <div>{elem.status}</div>
       <div>{elem.data}</div>
       {ActiveUser && <button onClick={()=>unBusy(elem.room)}>unbusy</button>}
       {ActiveUser && <button onClick={test}>change</button>}
       
     </li>)
     }
 })
 return arrRooms;
}
const arrRooms = createRoom(rooms);

  return (
    <ul className='inner__room'>
         {arrRooms}
    </ul>
  )
}

export default ViewRoom;