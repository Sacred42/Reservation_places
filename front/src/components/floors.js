import React from 'react';
import {getRoomsInitial} from './actions/RoomAction';
import ViewRoom from './rooms';
import { connect } from 'react-redux';
import Ajax from './services/ajax'

class Room extends React.Component{

ajax = new Ajax();

componentDidMount(){
 this.props.getRoomsInitial();
 this.interval = setInterval(this.ajax.checkResource , 10000);
}

componentDidUpdate(){
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
 }
}

const mapStateToProps = ({RoomReducer}) =>{
return {RoomReducer};
}


export default connect(mapStateToProps, mapDispatchToProps)(Room);