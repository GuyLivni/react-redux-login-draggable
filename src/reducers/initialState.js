export default {
  userData: {
    username: '',
    image: '',
    imageLocation: {x:0, y:0},
    profileLocation: {x:0, y:0}
  },
  login: {
    formState: {
      username: '',
      password: ''
    },
    loggedIn: false,
    errorMessage: '',
    loggedInUser: ''
  },
  currentlySending: false
};
