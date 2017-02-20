import {GET_USER_DATA, SAVE_USER_DATA} from '../actions/actionTypes';
import initialState from './initialState';

export default function homeReducer(state = initialState.userData, action) {
  switch (action.type) {
    case GET_USER_DATA:
      return action.newState;

    case SAVE_USER_DATA:
      return Object.assign({}, state, {
        userData: action.newState
      });

    default:
      return state;
  }
}
