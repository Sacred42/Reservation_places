const FreeRoomsReducer = (state = {rooms : []}, action) =>{
 switch(action.type){
     case 'LOADING_FREE_ROOMS' :
         return {
            loading : true,
            rooms : [],
            error : null
         }
      case 'SUCCES_FREE_ROOMS' :
          return {
              loading : false,
              rooms : action.payload,

              error : null
          }
        case 'FAILURE_FREE_ROOM' :
            return{
                loading : false,
                rooms : [],
                error : action.payload
            }
        default :
          return state
       
 }
}

export {FreeRoomsReducer};