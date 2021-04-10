import Ajax from '../services/ajax';
import {transformResource} from '../services/transformData';
const ajax = new Ajax();

const getRooms = () => async(dispatch) =>{
     dispatch({type : 'LOADING_ROOMS'});
     ajax.getResource()
     .then((data)=>data.json())
     .then((data)=>transformResource(data))
     .then((data)=>dispatch({type : 'SUCCESS_ROOMS' , payload : data}))
     .catch((error)=>dispatch({type : 'FAILURE_ROOMS' , payload : error}))
}

const changeStatusRoom = (room) => async(dispatch) =>{
     dispatch({type : 'CHANGE_STATUS_ROOM' , payload : transformResource(room)})
}

export {getRooms , changeStatusRoom};