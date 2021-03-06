import Ajax from '../services/ajax';
import {transformResource , trahsformRoom , defineFloors} from '../services/transformData';
const ajax = new Ajax();

const getRoomsInitial = () => async(dispatch) =>{
     dispatch({type : 'LOADING_ROOMS'});
     ajax.getResource()
     .then((data)=>transformResource(data))
     .then((data)=>{
          dispatch({type : 'SUCCESS_ROOMS' , payload : data});
          dispatch({type : 'GET_FLOORS' , payload : defineFloors(data)});
     })
     .catch((error)=>dispatch({type : 'FAILURE_ROOMS' , payload : error}))
}

const getRoomsUseFloor = (id) => async(dispatch) => {
     localStorage.setItem('current_floor' , id);
     dispatch({type : 'LOADING_ROOMS'});
     ajax.getResourceToFloor(id)
     .then((data=>transformResource(data)))
     .then((data)=> dispatch({type : 'SUCCESS_ROOMS' , payload : data}))
     .catch((error)=>dispatch({type : 'FAILURE_ROOMS' , payload : error}))
}

const getFloors = (rooms) => (dispatch) =>{
     dispatch({type : 'GET_FLOORS' , payload : rooms})
}

const changeStatusRoom = (room) => async(dispatch) =>{
     if(room === undefined){ return};
     dispatch({type : 'CHANGE_STATUS_ROOM' , payload : trahsformRoom(room)})
}

const createRoom = (room) => async(dispatch) =>{
  dispatch({type: 'CREATE_ROOM', payload : trahsformRoom(room)})
}

const deleteRoom = (room) => (dispatch) =>{
     dispatch({type : 'DELETE_ROOM', payload : room})
}

export {getRoomsInitial ,  getRoomsUseFloor , changeStatusRoom, getFloors , createRoom , deleteRoom };