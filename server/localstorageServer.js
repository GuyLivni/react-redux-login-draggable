let users;
let error;
let localStorage = global.window.localStorage;

// Add user to localstorage
const init = () => {
  // Check if any users exist otherwise add default user
  if (localStorage.users === undefined) {
    users = {
      "GuyLivni": {
        "password": "passme232",
        "userData": {
          "username": "GuyLivni",
          "image": "https://avatars2.githubusercontent.com/u/6113581",
          "imageLocation": {"x": 0, "y": 0},
          "profileLocation": {"x": 0, "y": 0}
        }
      }
    };
    localStorage.users = JSON.stringify(users);
  } else {
    users = JSON.parse(localStorage.users);
  }
};

// Server validation for the user login
export const login = (username, password, callback) => {
  const userExists = doesUserExist(username);
  // If the user exists and the password correct log the user in
  if (userExists && password == users[username].password) {
    if (callback) callback({
      authenticated: true,
      username
    });
  } else {
    if (userExists) {
      // If the password is wrong, throw the password-wrong error
      error = {type: "password-wrong"}
    } else {
      // If the user doesn't exist, throw the user-doesnt-exist
      error = {type: "user-doesnt-exist"}
    }
    if (callback) callback({
      authenticated: false,
      error: error,
      userData: ''
    });
  }
};

//log user out
export const logout = (callback) => {
  if (callback) callback();
};

//save user data to server
export const save = (username, userData) => {
  let users = JSON.parse(localStorage.users);
  for (let user in users) {
    if (users.hasOwnProperty(user) && user == username) {
      users[user].userData = userData;
      localStorage.setItem("users", JSON.stringify(users));
    }
  }
};

//get user data from server
export const getData = (username, callback) => {
  let users = JSON.parse(localStorage.users);
  for (let user in users) {
    if (users.hasOwnProperty(user) && user == username) {
      if (callback) callback({
        userData: users[username].userData
      });
    }
  }
};

//Checks if a username exists in the db
const doesUserExist = (username) => {
  return !(users[username] === undefined);
};

//init db
init();
