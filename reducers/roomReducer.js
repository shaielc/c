import { UPDATE_ROOMS } from '../constants/ActionTypes';

const initialState = [];

export default (state, action) => {
  switch (action.type) {
    case UPDATE_ROOMS:
      return action.data;
    default:
      return state ? state : initialState;
  }
};
