import React from 'react';
import {connect} from 'react-redux';
import {getRooms} from './actions/FreeRoomAction'

class FreeRooms extends React.Component {
    constructor() {
        super();
        this.activeFloor = localStorage.getItem('current_floor')
    };
    
    getFree = () =>{
      this.props.getRooms()
    }

    componentDidMount(){
     this.getFree();
    }

    createRoom = (arr) =>{
    let newArr = [];
    arr.forEach((elem)=>{
        if(elem.floor === `${this.activeFloor} этаж`){
            const numberRoom = elem.room.split(' ')[1];
            newArr.push(<li className="modal__free_room" key={`free- ${elem.room}`}>
                <div>{numberRoom}</div>
            </li>)
        }
    })
    return newArr;
 }

    render(){
       const {loading , rooms , error} = this.props.FreeRoomsReducer;

       if(loading){
           return (<div className="modal__free_rooms_position">...Loading</div>)
       }
       if(error){
           return(<div className="modal__free_rooms_position">{error}</div>)
       }
        return(
            <div className='modal__free_rooms_position'>
                <ul className="modal__free_room_list">
                    {this.createRoom(rooms)}
                </ul>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRooms : ()=>dispatch(getRooms())
  }
}

const mapStateToProps = ({FreeRoomsReducer}) =>{
    return {
        FreeRoomsReducer : FreeRoomsReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FreeRooms);