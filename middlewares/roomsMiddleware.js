import fetch from 'isomorphic-unfetch';

import { JOIN_ROOM } from '../constants/ActionTypes';
import Config from '../config/app';

export default store => next => action => {
  const result = next(action);
  switch (action.type) {
    default:
      break;
  }
  return result;
};
