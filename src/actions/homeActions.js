import {SAVE_USER_DATA, GET_USER_DATA} from './actionTypes';
import {sendingRequest} from './ajaxStatusActions';
import * as api from '../api/api';

export const saveUserDataSuccess = (newState) => {
  return {type: SAVE_USER_DATA, newState};
};

export const getUserDataSuccess = (newState) => {
  return {type: GET_USER_DATA, newState};
};

export const saveUserData = (username, data) => {
  return (dispatch) => {
    dispatch(sendingRequest(true));
    api.saveUserData(username, data, (response) => {
      dispatch(sendingRequest(false));
      dispatch(saveUserDataSuccess(response));
    });
  };
};

export const getUserStorageData = (username) => {
  return (dispatch) => {
    dispatch(sendingRequest(true));
    api.getUserData(username, (response, err) => {
      dispatch(sendingRequest(false));
      dispatch(getUserDataSuccess(response));
    });
  };
};
