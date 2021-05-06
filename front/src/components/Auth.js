import React,{ useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Ajax from './services/ajax';
import {adminTrue , adminFalse} from './actions/AdminAction';


const Auth = () =>{
    const[name, setName] = useState(null);
    const[password, setPassword] = useState(null);
    const[error, setError] = useState(null);
    const dispatch = useDispatch();
    const state = useSelector(state=>state.isAdminReducer);
    const {isAdmin} = state;

    const ajax = new Ajax();


    const handler = (e) =>{
      e.preventDefault();
      console.log(name , password)
      if(name === null || password === null){
        return setError('write in all fields');
      }
      else{
        ajax.auth(name , password)
        .then(()=>dispatch(adminTrue()))
        .then(clear())
        .catch((err)=>setError(err));
      }
    }
    
    const clear = () => {
        setName(null);
        setPassword(null);
        setError(null);
    }

    
    if(isAdmin){
        return(
            <div>
              <h2>Admin</h2>
              <button onClick={()=>dispatch(adminFalse())}>выход</button>
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