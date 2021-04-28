import React from 'react';


const ViewRoom = (props) => {
const {rooms} = props;

const createRoom = (room) =>{  // формирование комнаты
 console.log('from create room', room);
 const arrRooms = [];
 const busyPlace = 'my place!';
 const currentaFloor = localStorage.getItem('current_floor'); 
 room.forEach((elem)=>{
     if(elem.floor === `${currentaFloor} этаж`){
      const ActiveUser = localStorage.getItem('user') === elem.user;
      console.log(ActiveUser);
      arrRooms.push(<li className={`place place__${elem.status}`} key={elem.room}>
       <div>{elem.room}</div>
       <div>{elem.status}</div>
       <div>{elem.data}</div>
       <div>{ActiveUser && busyPlace}</div>
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