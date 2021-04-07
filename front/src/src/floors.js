import React from 'react';
import Places from './rooms';
import Ajax from './services/ajax';
import {transformResource as trans } from './services/transformData';

class Room extends React.Component{
state = {
allRooms: null,
qtyFloor: null,
modifiedRooms : null,
}
  
ajax = new Ajax();

componentDidMount(){
 this.loadingData();
}

loadingData = () =>{
  this.ajax.getResource()
  .then((resource)=>(resource.json()))
  .then((data)=>trans(data))
  .then((data)=>this.setState({
    allRooms : data
  }))
  .then(()=>this.defineFloors())
}

defineFloors = () =>{
  const getFloor = [];
  let nonRepeat = [];
  this.state.allRooms.forEach(({floor})=>{
    if(nonRepeat.includes(floor)){
      return;
    } 
    nonRepeat.push(floor);
    getFloor.push(floor);
  })
  this.setState({
    qtyFloor : getFloor.length
  })
  this.setState({
    modifiedRooms : Places({qty:this.state.qtyFloor, allrooms:this.state.allRooms})
  })
  console.log(this.state.allRooms)
}
  
render(){
  
  return(
    <div>{this.state.modifiedRooms}</div>
  )
 }
}


export default Room;