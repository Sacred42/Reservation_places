import Ajax from '../ajax';
import {changeStatusRoom} from '../../actions/RoomAction';

const templateFunction = (templ) =>{
    const ajax = new Ajax();
    switch(templ){
        case 'busyPlaceNA' :
          return {
            request : ajax.changeResource,
            func : changeStatusRoom
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
