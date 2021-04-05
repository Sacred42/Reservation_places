import React from 'react';
import Places from './places';
import Ajax from './services/ajax';

class Room extends React.Component{
state = {
allRooms: null,
qtyFloor: null,
modifiedRooms : null,
}
  
ajax = new Ajax();

componentDidMount(){
  this.ajax.getRooms()
  .then((inform)=>(inform.json()))
  .then((data)=> (this.setState({
    allRooms : data[0]
  })))
  .then(()=>this.defineFloors())
  
}

defineFloors = () =>{
  const getFloor = [];
  let nonRepeat = [];
  this.state.allRooms.forEach(({Name})=>{
    if(nonRepeat.includes(Name[0])){
      return;
    } 
    nonRepeat.push(Name[0]);
    getFloor.push(Name[0]);
  })
  this.setState({
    qtyFloor : getFloor.length
  })
  this.setState({
    modifiedRooms : Places({qty:this.state.qtyFloor, rooms:this.state.allRooms})
  })

}
  
render(){
  
  return(
    <div>{this.state.modifiedRooms}</div>
  )
 }
}


export default Room;