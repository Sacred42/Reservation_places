import React from 'react';
import {createLabel} from './hoc-function/createLabel';

const Rooms = (props) =>{
const {qty, allrooms} = props;
 let rooms = [];
        for(let i = 0; i < qty; i++){
                rooms.push(createLabel
                (<ul className='inner__room' key={i+1}>
                {createRoom(i , allrooms)}
            </ul>)
            )
        }  
        console.log(rooms);
        return rooms;
}

const createRoom = (itr , arr) =>{
    let room = [];
    arr.forEach((elem)=>{
        if(elem.floor === `${itr + 1} этаж`){
          room.push(
         (<li className={`place place__${elem.status}`} key={elem.room}>
              <span>{elem.status}</span>
          </li>)
          )
        }
    })

return room;
}
export default Rooms;