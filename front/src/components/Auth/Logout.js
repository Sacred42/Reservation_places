import React,{useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {unSetVisibleWindow} from '../actions/SuccesWindowAction';
import {adminFalse} from '../actions/AdminAction';

const Logout = () => {
    const [classbtn, setClassbtn] = useState(null)
    const dispatch = useDispatch();
    const state = useSelector(state=>state.ModalWindow)
    const {visible} = state;

    useEffect(()=>{
     if(visible){
      setClassbtn((prev)=>prev + ' admin__disabled_btn');
     }
     return()=>{
       setClassbtn(null)
      }
    },[visible])

    const logout = () =>{
     dispatch(unSetVisibleWindow());
     dispatch(adminFalse());

    }
    return (
        <div>
        <h2>Admin</h2>
        <button className={classbtn} onClick={()=>logout()}>выход</button>
      </div>
    )
}

export default Logout;
