const changeStatus = ({rooms}, value) =>{
     const index = rooms.findIndex((elem)=>elem.room === value.room);
     const oldElem = rooms[index];
     const newElem = {...oldElem , data : value.data , status : value.status, user : value.user};
     return [
         ...rooms.slice(0, index),
         newElem,
         ...rooms.slice(index + 1)
     ]
}

const RoomReducer = (state = {rooms : []} , action) =>{
    switch(action.type){
      case 'LOADING_ROOMS':
          return{
              loading: true,
              rooms : [],
              error : null
          }
        case 'SUCCESS_ROOMS_INITIAL':
            return{
              loading: false,
              rooms : action.payload,
              error : null
            }
        case 'SUCCESS_ROOMS_TO_FLOOR' : 
          return {
              loading: false,
              rooms : action.payload,
              error : null
          }
        case 'FAILURE_ROOMS':
            return{
              loading: false,
              rooms : [],
              error : action.payload
            }
        case 'CHANGE_STATUS_ROOM':
            return {
                rooms : changeStatus(state, action.payload)
            }
        default :
        return state
    }

}

export {RoomReducer};