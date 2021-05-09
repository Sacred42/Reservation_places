import React,{ useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Ajax from './services/ajax';
import {adminTrue , adminFalse} from './actions/AdminAction';
import {unSetVisibleWindow} from './actions/SuccesWindowAction';


const Auth = () =>{
    const[name, setName] = useState(null);
    const[password, setPassword] = useState(null);
    const[error, setError] = useState(null);
    const dispatch = useDispatch();
    const stateAdmin = useSelector(state=>state.isAdminReducer);
    const stateModal = useSelector(state=>state.ModalWindow);
    const {isAdmin} = stateAdmin;
    const {visible} = stateModal;
    const ajax = new Ajax();

    useEffect(()=>{
     if(visible && isAdmin){
       const btn = document.querySelector('.btn_logout')
       btn.disabled = true;
       btn.className += ' admin__no_auth_logout';
     }
     else if(!visible && isAdmin){
      const btn = document.querySelector('.btn_logout');
      btn.disabled = false;
      btn.className = 'btn_logout';
     }
     
    },[visible , isAdmin])
  
    const handler = (e) =>{
      e.preventDefault();
      console.log(name , password)
      if(name === null || password === null){
        return setError('write in all fields');
      }
      else{
        ajax.auth(name , password)
        .then(()=>signIn())
        .then(()=>clear())
        .catch((err)=>setError(err));
      }
    }
    
    const clear = () => {
        setName(null);
        setPassword(null);
        setError(null);
    }

    const signIn = () =>{
      dispatch(adminTrue());
      dispatch(unSetVisibleWindow());

    }

    const logout = () => {
      dispatch(adminFalse());
      dispatch(unSetVisibleWindow());
    }

    
    if(isAdmin){
        return(
            <div>
              <h2>Admin</h2>
              <button className='btn_logout' onClick={()=>logout()}>выход</button>
            </div>
        )
    }
    return(
        <div className="admin__head">
        <form onSubmit={handler}>
        <div className='admin__no_auth'>
            <div>
              <label>имя</label>
              <input name='name' onChange={(e)=>setName(e.target.value)}></input>
            </div>
            <div>
              <label>пароль</label>
              <input name='password' type='password' onChange={(e)=>setPassword(e.target.value)}></input>
            </div>
        </div>
        <div className='admin__no_auth_error'>{error}</div>
        <button className='admin__no_auth_btn' type='submit' >войти</button>
        </form>
        </div>
    )
}

export default Auth;