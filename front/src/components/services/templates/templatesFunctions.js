import Ajax from '../ajax';
import {changeStatusRoom , createRoom} from '../../actions/RoomAction';
const ajax = new Ajax();

const templateFunction = (templat) =>{
    if(templat === undefined){
      return {request : ajax.changeResource,
            func : changeStatusRoom}
    }
    console.log('templat!!!-', templat)
    const {adtn, templ} = templat;
    console.log('темпал-', templ)
    
    switch(templ){
        case 'busyPlaceNA' :
          return {
            request : ajax.changeResource,
            func : changeStatusRoom
          }
          case 'createRoom' :
            return {
              request : ajax.createRoom,
              func : createRoom
            }
        case 'createDate' : 
          return {
              request : ajax.changeDate,
              func : changeStatusRoom
          }
        case 'changeUser' :
          return{
            request : ajax.changeUser,
            func : changeStatusRoom
          }
        default :
          return {
            request : ajax.changeResource,
            func : changeStatusRoom
        }
    }
}

export default templateFunction;
