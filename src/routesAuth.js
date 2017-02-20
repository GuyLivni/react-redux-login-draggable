import configureStore from './store/configureStore.dev';

export const checkAuth = (nextState, replace) => {

  let {loggedIn} = configureStore().getState().login;

  if (nextState.location.pathname == '/') {
    if (loggedIn) {
      replace('/homepage');
    } else {
      replace(null, '/');
    }
  } else {
    if (!loggedIn) {
      replace('/');
    }
  }
};
