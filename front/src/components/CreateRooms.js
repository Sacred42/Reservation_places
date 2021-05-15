import React from 'react';
import Ajax from './services/ajax';
import {changeStatusRoom, deleteRoom} from './actions/RoomAction';
import { useDispatch, useSelector } from 'react-redux';
import {openWindow } from './actions/ModalWindowActions';


const ViewRoom = (props) => {
const {rooms} = props;
const ajax = new Ajax();
const dispatch = useDispatch();
const state = useSelector(state=>state.isAdminReducer);
const {isAdmin} = state;

const unBusy = (room) =>{
   
   ajax.unBusyPlace(room)
   .then((data)=>dispatch(changeStatusRoom(data)))
   .catch(err=>err);
   
}

const deleted = (room) =>{
  const number = room.split(' ')[1];
  ajax.deleteRoom(number)
  .then(data=>dispatch(deleteRoom(data)))
  .catch(err=>err);
}

const openModal = (room , {templ , adtn = null }) => {
  console.log('это adtn', adtn)
  if(room === null){
    return dispatch(openWindow({templ , adtn } ));
  }
  const getNumberRoom = room.split(' ')[1];
  localStorage.setItem('current_room' , getNumberRoom );
  dispatch(openWindow({templ , adtn }));

}

const addRoom = () =>{
  return(
  <li className='empty__room' key={'btn_add_room'}>
    <div><button onClick={()=>openModal( null ,{templ : 'createRoom'})}>Добавить комнату</button></div>
 </li>
  )
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
       {(ActiveUser || isAdmin) ? <div><a onClick={()=>openModal(elem.room, {templ : 'createDate' , adtn : elem.data} )}>{elem.data}</a></div> : <div>{elem.data}</div>}
       {(ActiveUser || isAdmin) && elem.status === 'busy' && <div><button onClick={()=>unBusy(elem.room)}>unbusy</button></div>}
       {(ActiveUser || isAdmin) && elem.status === 'free' && <div><button onClick={()=>openModal(elem.room , {templ : 'busyPlaceA'})}>busy</button></div>}
       {isAdmin && <div><button onClick={()=>deleted(elem.room)}>delete</button></div>} 
       {isAdmin && <div><a onClick={()=>openModal(elem.room, {templ : 'changeUser'})}>{elem.user}</a></div>}
     </li>)
     }
 })
 {isAdmin && arrRooms.push(addRoom())};
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