import Rooms from '../rooms';
const transformResource = (resource) =>{
    const transformResource = resource[0].map((elem)=>{
      return{
        floor : elem.Name[0],
        room : elem.Name[1],
        status : elem.Status
      }
    })
    return defineFloors(transformResource);
  }

  const defineFloors = (transformResource) =>{
    const getFloor = [];
    let nonRepeat = [];
    transformResource.forEach(({floor})=>{
      if(nonRepeat.includes(floor)){
        return;
      } 
      nonRepeat.push(floor);
      getFloor.push(floor);
    })
    return Rooms({qty:getFloor.length ,allrooms: transformResource} )
  }

  export {transformResource}
 