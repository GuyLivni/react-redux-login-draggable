import {login, logout, save, getData} from '../../server/localstorageServer';
import delay from './delay';

// Fake XMLHttpRequest wrapper
export const request = {
  post(endpoint, data, callback) {
    setTimeout(() => {
      switch (endpoint) {
        case '/login':
          login(data.username, data.password, callback);
          break;
        case '/logout':
          logout(callback);
          break;
        case '/save':
          save(data.username, data.data);
          break;
        case '/data':
          getData(data.username, callback);
          break;
        default:
          break;
      }
    }, delay);
  },
  get(endpoint, data, callback) {
    setTimeout(() => {
      switch (endpoint) {
        case '/data':
          getData(data.username, callback);
          break;
        default:
          break;
      }
    }, delay);
  }
};
