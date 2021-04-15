const FloorReducer = (state = {qtyFloor : null}  , action) =>{
    switch(action.type){
        case 'GET_FLOORS' :
            return {
                qtyFloor : action.payload
            }
        default :
        return state;
    }
}

export {FloorReducer};