import {request} from './fakeRequest';

// Logs in user
export const login = (username, password, callback) => {
  // Post a login request
  request.post('/login', {username, password}, (response) => {
    // Return the userData to get username
    if (response.authenticated) {
      localStorage.token = response.token;
      callback(response.username);
    } else {
      // If there was a problem authenticating the user, show an error on the form
      callback(false, response.error);
    }
  });
};

// Logs the current user out
export const logout = (callback) => {
  request.post('/logout', {}, () => {
    callback(true);
  });
};

// Save user data
export const saveUserData = (username, data, callback) => {
  request.post('/save', {username, data}, (response) => {
    callback(response);
  });
};

// Get user data
export const getUserData = (username, callback) => {
  request.get('/data', {username}, (response) => {
    callback(response.userData);
  });
};

// Check if we have user token
export const loggedIn = () => {
  return !!localStorage.token;
};
