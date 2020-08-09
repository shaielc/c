import fetch from 'isomorphic-unfetch';

import { QUEUE_SUGGEST } from '../constants/ActionTypes';
import Config from '../config/app';

export default store => next => action => {
  const result = next(action);
  switch (action.type) {
    case QUEUE_SUGGEST:
      fetch(`${Config.HOST}/api/add-suggestion`, {
        method: 'GET'
      }).then(track => console.debug(track));
      break;
    default:
      break;
  }
  return result;
};
