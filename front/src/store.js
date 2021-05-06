import { createStore, applyMiddleware , combineReducers, compose} from 'redux';
import {RoomReducer} from  './components/reducer/RoomReducer';
import {SuccessWindowReducer} from './components/reducer/SuccessWindowReducer';
import {FloorReducer} from './components/reducer/FloorReducer';
import {ModalWindow} from './components/reducer/ModalWindow';
import {isAdminReducer} from './components/reducer/isAdminReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  RoomReducer : RoomReducer,
  SuccessWindowReducer : SuccessWindowReducer,
  FloorReducer : FloorReducer,

  ModalWindow : ModalWindow,

  isAdminReducer : isAdminReducer
})

const composeEnhncer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer , composeEnhncer(applyMiddleware(thunk)));

export default store;