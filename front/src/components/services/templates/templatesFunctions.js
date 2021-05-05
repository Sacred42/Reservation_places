import Ajax from '../ajax';
import {changeStatusRoom} from '../../actions/RoomAction';

const templateFunction = (templ) =>{
    console.log(templ,'that is templ!')
    const ajax = new Ajax();
    switch(templ){
        case 'changeResource' :
          return {
            request : ajax.changeResource,
            func : changeStatusRoom
          }
        case 'fromRoom' : 
          return {
              request : ajax.changeDate,
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
