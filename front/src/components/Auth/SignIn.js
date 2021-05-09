import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Ajax from '../services/ajax';
import {adminTrue} from '../actions/AdminAction';
import {unSetVisibleWindow} from '../actions/SuccesWindowAction';


const SignIn = () => {
const [login , setLogin] = useState('');
const [password, setPassword] = useState('');
const [classbtn, setClassbtn] = useState('admin__no_auth_btn');
const [error, setError] = useState(null);
const dispatch = useDispatch();
const state = useSelector(state=>state.ModalWindow);
const ajax = new Ajax();
const {visible} = state;

useEffect(()=>{
    if(visible){
      setClassbtn((prev)=>prev + ' admin__disabled_btn');
    }
    return()=>{
        setClassbtn('admin__no_auth_btn');
    }
},[visible])

const getAdmin = () =>{
  dispatch(unSetVisibleWindow());
  dispatch(adminTrue());
}

const clear = () =>{
    setLogin(null);
    setPassword(null);
    setError(null);
}

const handler = (e)=>{
    e.preventDefault();
    if(login === '' || password === '' ){
        setError('write in all fields');
    }
    else{
        ajax.auth(login , password)
        .then(()=>getAdmin())
        .then(()=>clear())
        .catch((err)=>setError(err));
      }
}

return(
    <div className="admin__head">
        <form onSubmit={handler}>
        <div className='admin__no_auth'>
            <div>
              <label>имя</label>
              <input name='name' onChange={(e)=>setLogin(e.target.value)}></input>
            </div>
            <div>
              <label>пароль</label>
              <input name='password' type='password' onChange={(e)=>setPassword(e.target.value)}></input>
            </div>
        </div>
        <div className='admin__no_auth_error'>{error}</div>
        <button className={classbtn} type='submit' >войти</button>
        </form>
        </div>
)
}

export default SignIn;