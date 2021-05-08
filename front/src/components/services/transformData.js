
const transformResource = (resource) =>{
    const transformResource = resource[0].map((elem)=>{
      return{
        floor : elem.Name[0],
        room : elem.Name[1],
        data : transformDates(elem.Data),
        status : elem.Status,

        user : elem.ActiveUser

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
    const year = date[2] + date[3];
    return `До ${day}.${month}.${year} ${hours}:${minutes}`;
  }

  const trahsformRoom = (room) =>{
    return{
      floor : `${room[0][0].floorId} этаж`,
      room : room[0][0].Name,
      data : transformDates(room[0][0].Data),
      status : room[0][0].Status, 
      user : room[0][0].ActiveUser
    }
  }

  const defineFloors = (props) =>{ // определение кол-ва этажей
    let qtyFloor ;
    const numbersFloors = [];
    props.forEach(({floor})=>{
     const number = floor.split(' ')[0];
     numbersFloors.push(parseInt(number));
    })
    qtyFloor = numbersFloors.reduce((a,b)=>{
     return a > b ?  a : b;
    })
    return qtyFloor ;
  }



  export {transformResource , trahsformRoom , defineFloors}
 