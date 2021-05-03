const openWindow = (template) => (dispatch)=>{
    dispatch({type : 'OPEN_MODAL' , payload : template})
}

const closeWindow = () => (dispatch) => {
    dispatch({type : 'CLOSE_MODAL'})
}

export {openWindow , closeWindow}