import {SENDING_REQUEST} from '../actions/actionTypes';
import initialState from './initialState';

export default function ajaxStatusReducer(state = initialState.currentlySending, action) {
  switch (action.type) {
    case SENDING_REQUEST:
      return Object.assign({}, state, {
        currentlySending: action.sending
      });

    default:
      return state;
  }
}
