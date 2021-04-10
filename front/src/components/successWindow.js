import React from 'react';
import {connect} from 'react-redux';
class SuccessWindow extends React.Component{

    render(){
        console.log(this.props);
        if(this.props){
            return (
                <div className='successWindow'>
                    Место забронировано успешно!
                </div>
            )
        }
        
    }
    
}

const mapStateToProps = ({SuccessWindowReducer}) =>{
    return SuccessWindowReducer;
}

export default connect(mapStateToProps)(SuccessWindow);