import {SENDING_REQUEST} from './actionTypes';

export function sendingRequest(sending) {
  return {type: SENDING_REQUEST, sending};
}
