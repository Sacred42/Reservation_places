import React from 'react';

const Place = (props) =>{
        const {qty, rooms} = props;
        console.log(qty, rooms)
        let places = [];
        
        for(let i = 0; i < qty; i++){
        
         places.push(<ul className='inner__room' key={i+1}>
             {createPlace(i , rooms)}
         </ul>)
        }  
        return places    
}

const createPlace = (itr , arr) =>{
    let place = [];
    arr.forEach((elem)=>{
        if(elem.Name[0] === `${itr + 1} этаж`){
            console.log(elem.Status)
          place.push(<li className='place' key={elem.Name[1]}>
              <span>{elem.Status}</span>
          </li>)
        }
    })

return place;
  

}
export default Place;