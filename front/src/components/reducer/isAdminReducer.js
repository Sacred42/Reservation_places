const isAdminReducer = (state = {isAdmin : false}, action) =>{
 switch(action.type){
    case 'ISADMIN_TRUE' : 
      return {
          isAdmin : true
      }
    case 'ISADMIN_FALSE' : 
      return {
          isAdmin : false
      }
    default :
      return state
 }
}

export {isAdminReducer}