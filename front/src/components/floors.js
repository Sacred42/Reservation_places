import React from 'react';
import {getRoomsInitial , getRoomsUseFloor} from './actions/RoomAction';
import ViewRoom from './rooms';
import { connect } from 'react-redux';
import Ajax from './services/ajax'

class Room extends React.Component{

ajax = new Ajax();


componentDidMount(){
//  const computerName = this.network.computerName;
 console.log('that is computer userName-', localStorage.getItem('user'))
 localStorage.setItem('current_floor' , 1);
 this.props.getRoomsInitial();
 this.interval = setInterval(this.checkRoomS , 10000);
}

checkRoomS = () =>{
  this.ajax.checkResource()
  .then(()=>this.props.getRoomsInitial())
}


componentDidUpdate(){
  console.log('update');
}

render(){
  const {RoomReducer : {rooms , error ,  loading}} = this.props;
  if(loading){
    return <div>...Loading</div>
  }
  if(error){
    <div>{error}</div>
  }
    return(
      <div>
        <ViewRoom rooms = {rooms} />
      </div> 
    )
 
 }
}

const mapDispatchToProps = (dispatch) =>{
 return{
  getRoomsInitial : ()=> dispatch(getRoomsInitial()),
  getRoomsUseFloor : (id)=> dispatch(getRoomsUseFloor(id))
 }
}

const mapStateToProps = ({RoomReducer}) =>{
return {RoomReducer};
}


export default connect(mapStateToProps, mapDispatchToProps)(Room);