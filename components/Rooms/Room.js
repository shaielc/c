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
    <tr onClick={() => console.log('clicked room: ', getName(room), ' (id: ', room.id, ')')}>
      <RoomMetaData name={getName(room)}></RoomMetaData>
      <Track track={getTrack(room)}></Track>
    </tr>
  );
};
