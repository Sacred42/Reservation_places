import React from 'react';
import {connect} from 'react-redux';
import {setVisibleWindow} from  './actions/SuccesWindowAction';

class SuccessWindow extends React.Component{

    render(){
        const {visible} = this.props;
        if(visible){
            return (
                <div className='successWindow'>
                    Место забронировано успешно!
                </div>
            )
        }
        return<div></div>;
    }  
}

const mapStateToProps = ({SuccessWindowReducer}) =>{
    return SuccessWindowReducer;
}

export default connect(mapStateToProps)(SuccessWindow);