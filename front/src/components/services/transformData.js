
const transformResource = (resource) =>{
    const transformResource = resource[0].map((elem)=>{
      return{
        floor : elem.Name[0],
        room : elem.Name[1],
        data : transformDates(elem.Data),
        status : elem.Status
      }
    })
    return transformResource ;
  }

  const transformDates = (date) =>{
    if(date === null){
      return ;
    }
    const minutes = date[14] + date[15];
    const hours = date[11] + date[12];
    const day = date[8] + date[9];
    const month = date[5] + date[6];
    return `До ${day}.${month} ${hours}:${minutes}`;
  }

  const trahsformRoom = (room) =>{
    return{
      floor : `${room[0][0].floorId} этаж`,
      room : room[0][0].Name,
      status : room[0][0].Status
    }
  }

  const defineFloors = (props) =>{ // определение кол-ва этажей
    const getFloor = [];
    let nonRepeat = [];
    props.forEach(({floor})=>{
      if(nonRepeat.includes(floor)){
        return;
      } 
      nonRepeat.push(floor);
      getFloor.push(floor);
    })
    console.log(getFloor.length);
    return getFloor.length ;
  }



  export {transformResource , trahsformRoom , defineFloors}
 