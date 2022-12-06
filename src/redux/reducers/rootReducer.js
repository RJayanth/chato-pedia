import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import chatBoxReducer from './chatBoxReducer';

const rootReducer = combineReducers({ loginReducer, chatBoxReducer });

export default rootReducer;
