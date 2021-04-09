import React from 'react';
import Places from './rooms';
import {roomAction} from './actions/RoomAction';
import { connect } from 'react-redux';

class Room extends React.Component{

componentDidMount(){
 this.props.roomAction();
}
 
render(){
  const {roomAction , rooms, error, loading} = this.props;
  return(
    <div>{rooms}</div> 
  )
 }
}

const mapDispatchToProps = (dispatch) =>{
 return{
  roomAction : ()=> dispatch(roomAction())
 }
}

const mapStateToProps = ({RoomReducer}) =>{
console.log(RoomReducer);
return RoomReducer;
}


export default connect(mapStateToProps, mapDispatchToProps)(Room);