const ModalWindowReducer = (state = {visible : false} , action) =>{
    switch(action.type){
        case 'OPEN_MODAL' :
          return {
              visible : true,
              templates : action.payload
          }
          case 'CLOSE_MODAL' :
              return {
                  visible : false
                }
         default :
           return state;
    }
}

export {ModalWindowReducer}