import React from 'react';
import {createLabel} from './hoc-function/createLabel';

const Place = (props) =>{
const {qty, rooms} = props;
 let places = [];
        for(let i = 0; i < qty; i++){
                places.push(createLabel
                (<ul className='inner__room' key={i+1}>
                {createPlace(i , rooms)}
            </ul>)
            )
        }  
        return places
}

const createPlace = (itr , arr) =>{
    let place = [];
    arr.forEach((elem)=>{
        if(elem.Name[0] === `${itr + 1} этаж`){
          place.push(
         (<li className={`place place__${elem.Status}`} key={elem.Name[1]}>
              <span>{elem.Status}</span>
          </li>)
          )
        }
    })

return place;
}
export default Place;