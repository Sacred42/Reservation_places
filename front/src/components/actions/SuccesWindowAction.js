const setVisibleWindow = () =>(dispatch) =>{
   dispatch({type : 'SET_VISIBLE'});
}

const unSetVisibleWindow = () =>(dispatch)=>{
   dispatch({type : 'UNSET_VISIBLE'});
}

export {setVisibleWindow , unSetVisibleWindow};