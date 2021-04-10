const SuccessWindowReducer = (state = false , action) => {
  console.log('redux was here!', action.type)
  switch(action.type){
      case 'SET_VISIBLE' :
         return !state;
      default :
        return state;
  }
}

export {SuccessWindowReducer};