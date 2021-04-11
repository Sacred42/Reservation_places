const SuccessWindowReducer = (state = {visible : false} , action) => {
  console.log('redux was here!', action.type)
  switch(action.type){
      case 'SET_VISIBLE' :
         return {visible: true};
      case 'UNSET_VISIBLE' :
         return {visible : false}
      default :
        return state;
  }
}

export {SuccessWindowReducer};