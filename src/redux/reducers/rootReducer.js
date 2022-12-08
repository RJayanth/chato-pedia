import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import chatBoxReducer from './chatBoxReducer';

const rootReducer = combineReducers({ login: loginReducer, chatBox: chatBoxReducer });

export default rootReducer;
