import React from 'react';


const ViewRoom = (props) => {

const {rooms} = props;

const createRoom = (room) =>{  // формирование комнаты
 const arrRooms = [];
 const currentaFloor = localStorage.getItem('current_floor'); 
 room.forEach((elem)=>{
     if(elem.floor === `${currentaFloor} этаж`){
      arrRooms.push(<li className={`place place__${elem.status}`} key={elem.room}>
       <div>{elem.room}</div>
       <div>{elem.status}</div>
       <div>{elem.data}</div>
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