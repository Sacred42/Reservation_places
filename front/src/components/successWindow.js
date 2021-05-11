import React from 'react';
import {connect} from 'react-redux';

class SuccessWindow extends React.Component{
    state = {
        currentTemplate : null
    }
    componentDidUpdate(){
        if(this.props.template){
            if(this.props.template !== this.state.currentTemplate){
                this.setState({currentTemplate : this.props.template})
            }
        }
 
    }
    render(){
        const {visible} = this.props;
        if(visible && (this.state.currentTemplate === 'busyPlaceA' || this.state.currentTemplate === 'busyPlaceNA')){
            return (
                <div className='successWindow'>
                    Место забронировано успешно!
                </div>
            )
        }
        if(visible && this.state.currentTemplate === 'changeUser' ){
            return (
                <div className='successWindow'>
                Пользователь изменен успешно!
            </div>  
            )
        }
        if(visible && this.state.currentTemplate === 'createRoom' ){
            return (
                <div className='successWindow'>
                Комната создана успешно!
            </div>  
            )
        }
        if(visible && this.state.currentTemplate === 'createDate' ){
            return (
                <div className='successWindow'>
                 Дата изменена успешно!
            </div>  
            )
        }
        return<div></div>;
    }  
}

const mapStateToProps = ({SuccessWindowReducer : {visible} , ModalWindow : {template}}) =>{
    return {
        visible : visible,
        template : template
    };
}

export default connect(mapStateToProps)(SuccessWindow);