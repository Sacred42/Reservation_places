import React from 'react';
import {getRooms} from './actions/RoomAction';
import DefineFloors from './rooms';
import { connect } from 'react-redux';

class Room extends React.Component{

componentDidMount(){
 this.props.getRooms();
}
 
render(){
  const { rooms, error, loading} = this.props;
  console.log(rooms)
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