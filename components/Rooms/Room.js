import React from 'react';
import RoomMetaData from './RoomMetaData';
import Track from './RoomTrack';

function getName(room) {
  if (!room) {
    return;
  }
  return room.name;
}

function getTrack(room) {
  return room.currentlyPlaying;
}

export default ({ room }) => {
  return (
    <tr>
      <RoomMetaData name={getName(room)}></RoomMetaData>
      <Track track={getTrack(room)}></Track>
    </tr>
  );
};
