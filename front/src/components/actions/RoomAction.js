import Ajax from '../services/ajax';
import {transformResource} from '../services/transformData';
const ajax = new Ajax();

const roomAction = () => async(dispatch) =>{
     dispatch({type : 'LOADING_ROOMS'});
     ajax.getResource()
     .then((data)=>data.json())
     .then((data)=>transformResource(data))
     .then((data)=>dispatch({type : 'SUCCESS_ROOMS' , payload : data}))
     .catch((error)=>dispatch({type : 'FAILURE_ROOMS' , payload : error}))
}

export {roomAction};