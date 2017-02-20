import {SAVE_USER_DATA, GET_USER_DATA} from './actionTypes';
import {sendingRequest} from './ajaxStatusActions';
import * as api from '../api/api';

export function saveUserDataSuccess(newState) {
  return {type: SAVE_USER_DATA, newState};
}

export function getUserDataSuccess(newState) {
  return {type: GET_USER_DATA, newState};
}

export function saveUserData(username, data) {
  return (dispatch) => {
    dispatch(sendingRequest(true));
    api.saveUserData(username, data, (response) => {
      dispatch(saveUserDataSuccess(response));
    });
  };
}

export function getUserStorageData(username) {
  return (dispatch) => {
    dispatch(sendingRequest(true));
    api.getUserData(username, (response, err) => {
      dispatch(getUserDataSuccess(response));
    });
  };
}
