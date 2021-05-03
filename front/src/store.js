import { createStore, applyMiddleware , combineReducers, compose} from 'redux';
import {RoomReducer} from  './components/reducer/RoomReducer';
import {SuccessWindowReducer} from './components/reducer/SuccessWindowReducer';
import {FloorReducer} from './components/reducer/FloorReducer';
import {ModalWindowReducer} from './components/reducer/ModalWindowReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  RoomReducer : RoomReducer,
  SuccessWindowReducer : SuccessWindowReducer,
  FloorReducer : FloorReducer,

  ModalWindowReducer : ModalWindowReducer
})

const composeEnhncer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer , composeEnhncer(applyMiddleware(thunk)));

export default store;