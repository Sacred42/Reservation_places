import React from 'react';
import {getRooms} from './actions/RoomAction';
import DefineFloors from './rooms';
import { connect } from 'react-redux';
import Ajax from './services/ajax'

class Room extends React.Component{

ajax = new Ajax();

componentDidMount(){
 this.props.getRooms();
 this.interval = setInterval(this.ajax.checkResource , 10000);
}
 
render(){
  const { rooms, error, loading} = this.props;
  if(loading){
    return <div>...Loading</div>
  }
  if(error){
    <div>{error}</div>
  }
    return(
      <div>{DefineFloors(rooms)}</div> 
    )
 
 }
}

const mapDispatchToProps = (dispatch) =>{
 return{
  getRooms : ()=> dispatch(getRooms())
 }
}

const mapStateToProps = ({RoomReducer}) =>{
return RoomReducer;
}


export default connect(mapStateToProps, mapDispatchToProps)(Room);