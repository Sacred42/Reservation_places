import React from 'react';
import Ajax from './services/ajax';
import {unBusyPlace} from './actions/RoomAction';
import { useDispatch, useSelector } from 'react-redux';
import {openWindow} from './actions/ModalWindowActions'


const ViewRoom = (props) => {
const {rooms} = props;
const ajax = new Ajax();
const dispatch = useDispatch();
const state = useSelector(state=>state.isAdminReducer);
const {isAdmin} = state;

const unBusy = (room) =>{
   
   ajax.unBusyPlace(room)
   .then((data)=>dispatch(unBusyPlace(data)))
   .catch(err=>err);
   
}

const openModal = (room , templ) => {
  if(room === null){
    return dispatch(openWindow(templ));
  }
  const getNumberRoom = room.split(' ')[1];
  localStorage.setItem('current_room' , getNumberRoom );
  dispatch(openWindow(templ));

}

const addRoom = () =>{
  return(
  <li className='empty__room'>
    <div><button onClick={()=>openModal( null ,'createRoom')}>Добавить комнату</button></div>
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
       {(ActiveUser || isAdmin) ? <div><a onClick={()=>openModal(elem.room, 'createDate')}>{elem.data}</a></div> : <div>{elem.data}</div>}
       {(ActiveUser || isAdmin) && elem.status === 'busy' && <div><button onClick={()=>unBusy(elem.room)}>unbusy</button></div>}
       {/* {(ActiveUser || isAdmin) && elem.status === 'busy' && <div><button onClick={()=>openModal(elem.room , 'fromRoom' )}>change</button></div>} */}
       {(ActiveUser || isAdmin) && elem.status === 'free' && <div><button onClick={()=>openModal(elem.room , 'busyPlaceA')}>busy</button></div>}
       {isAdmin && <div><button>delete</button></div>} 
       {isAdmin && <div><a onClick={()=>openModal(elem.room, 'changeUser')}>{elem.user}</a></div>}
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