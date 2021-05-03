const openModal = (template) => (dispatch) =>{
    dispatch({type : 'OPEN_MODAL' , payload : template})
} 

const closeModal = () => (dispatch)=>{
    dispatch({type : 'CLOSE_MODAL'})
}

export {openModal, closeModal}