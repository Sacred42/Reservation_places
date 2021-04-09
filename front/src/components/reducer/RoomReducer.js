const changeStatus = (products, value) =>{
    console.log(products , value)
}

const RoomReducer = (state = {room : []} , action) =>{
    switch(action.type){
      case 'LOADING_ROOMS':
          return{
              loading: true,
              rooms : [],
              error : null
          }
        case 'SUCCESS_ROOMS':
            return{
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