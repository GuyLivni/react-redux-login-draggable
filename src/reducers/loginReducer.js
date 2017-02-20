import {SET_AUTH, SET_ERROR_MESSAGE, SET_USER} from '../actions/actionTypes';
import initialState from './initialState';

export default function loginReducer(state = initialState.login, action) {
  switch (action.type) {
    case SET_AUTH:
      return Object.assign({}, state, {
        loggedIn: action.newState
      });

    case SET_USER:
      return Object.assign({}, state, {
        loggedInUser: action.newState
      });

    case SET_ERROR_MESSAGE:
      return Object.assign({}, state, {
        errorMessage: action.message
      });
    default:
      return state;
  }
}
