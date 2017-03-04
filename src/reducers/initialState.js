import { loggedIn } from '../api/api';

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
    loggedIn: loggedIn(),
    errorMessage: '',
    loggedInUser: ''
  },
  currentlySending: false
};
