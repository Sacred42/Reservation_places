
const transformResource = (resource) =>{
   console.log(resource);
    const transformResource = resource[0].map((elem)=>{
      return{
        floor : elem.Name[0],
        room : elem.Name[1],
        data : elem.Data,
        status : elem.Status
      }
    })
    return transformResource;
  }

  const trahsformRoom = (room) =>{
    return{
      floor : `${room[0][0].floorId} этаж`,
      room : room[0][0].Name,
      status : room[0][0].Status
    }
  }



  export {transformResource , trahsformRoom}
 