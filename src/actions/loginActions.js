import {SET_AUTH, SET_ERROR_MESSAGE, SET_USER} from './actionTypes';
import {sendingRequest} from './ajaxStatusActions';
import * as errorMessages  from '../constants/messageConstants';
import * as api from '../api/api';
import {browserHistory} from 'react-router';

export const setAuthState = (newState) => {
  return {type: SET_AUTH, newState};
};

export const setLoggedInUser = (newState) => {
  return {type: SET_USER, newState};
};

export const setErrorMessage = (message) => {
  return {type: SET_ERROR_MESSAGE, message};
};

export const login = (username, password) => {
  return (dispatch) => {
    // Show the loading indicator
    dispatch(sendingRequest(true));
    dispatch(setErrorMessage(''));
    // If no username or password was specified, throw a field-missing error
    if (validateLoginForm({username, password})) {
      dispatch(setErrorMessage(errorMessages.FIELD_MISSING));
      dispatch(sendingRequest(false));
      return;
    }
    // login request
    api.login(username, password, (response, err) => {
      // Hide the loading indicator
      dispatch(sendingRequest(false));
      if (response) {
        // If the login worked, forward the user to the homepage
        dispatch(setAuthState(true));
        dispatch(setLoggedInUser(response));
        forwardTo('/homepage');
      } else {
        // show error
        dispatch(setAuthState(false));
        showError(err, dispatch);
      }
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(sendingRequest(true));
    api.logout((success) => {
      if (success === true) {
        dispatch(sendingRequest(false));
        dispatch(setAuthState(false));
        dispatch(setLoggedInUser(''));
        forwardTo('/');
      } else {
        dispatch(setErrorMessage(errorMessages.GENERAL_ERROR));
      }
    });
  };
};

const validateLoginForm = (credentials) => {
  for (let credential in credentials) {
    if (credentials.hasOwnProperty(credential) && !credentials[credential]) {
      return true;
    }
  }
  return false;
};

const showError = (err, dispatch) => {
  switch (err.type) {
    case 'user-doesnt-exist':
      dispatch(setErrorMessage(errorMessages.USER_NOT_FOUND));
      return;
    case 'password-wrong':
      dispatch(setErrorMessage(errorMessages.WRONG_PASSWORD));
      return;
    default:
      dispatch(setErrorMessage(errorMessages.GENERAL_ERROR));
      return;
  }
};

const forwardTo = (location) => {
  browserHistory.push(location);
};
