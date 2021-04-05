
const transformResource = (resource) =>{
    const transformResource = resource[0].map((elem)=>{
      return{
        floor : elem.Name[0],
        room : elem.Name[1],
        status : elem.Status
      }
    })
    return transformResource;
  }

  export {transformResource}
 