import { createStore, applyMiddleware , combineReducers, compose} from 'redux';
import {RoomReducer} from  './components/reducer/RoomReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  RoomReducer : RoomReducer
})

const store = createStore(reducer , applyMiddleware(thunk));

export default store;