import React from 'react';
import {createLabel} from './hoc-function/createLabel';

const DefineFloors = (props) =>{
    console.log(props)
    if(props === undefined){
        return;
    }
    const getFloor = [];
    let nonRepeat = [];
    props.forEach(({floor})=>{
      if(nonRepeat.includes(floor)){
        return;
      } 
      nonRepeat.push(floor);
      getFloor.push(floor);
    })
    return rooms(getFloor.length , props );
  }

const rooms = (qty, allrooms) =>{

 let rooms = [];
        for(let i = 0; i < qty; i++){
                rooms.push(createLabel
                (<ul className='inner__room' key={i+1}>
                {createRoom(i , allrooms)}
            </ul>)
            )
        }  
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
export default DefineFloors;