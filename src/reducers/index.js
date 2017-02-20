import {combineReducers} from 'redux';
import login from './loginReducer';
import home from './homeReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  login,
  home,
  ajaxCallsInProgress
});

export default rootReducer;
