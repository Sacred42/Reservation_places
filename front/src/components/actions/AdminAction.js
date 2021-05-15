const adminTrue = () => (dispatch)=>{
    dispatch({type : 'ISADMIN_TRUE'})
}

const adminFalse = () => (dispatch)=>{
   dispatch({type : 'ISADMIN_FALSE'})
}

export {adminTrue, adminFalse};