import fetch from 'isomorphic-unfetch';

import Config from '../config/app';
import * as types from '../constants/ActionTypes';

export const joinRoom = (roomId, userId) => ({ type: types.JOIN_ROOM, roomId, userId });
export const leaveRoom = (roomId, targetId, sourceId) => ({
  type: types.REQUEST_LEAVER_ROOM,
  roomId,
  targetId,
  sourceId
});
export const createRoom = (user, name) => ({
  type: types.CREATE_ROOM,
  user,
  name
});
export const deleteRoom = (user, room) => ({
  type: types.DELETE_ROOM,
  user,
  room
});

export const fetchRooms = () => dispatch =>
  fetch(`${Config.HOST}/api/rooms`)
    .then(res => res.json())
    .then(res => dispatch(updateRooms(res)));
