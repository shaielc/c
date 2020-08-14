import React from 'react';
import RoomMetaData from './RoomMetaData';
import Track from './RoomTrack';

export default ({ room, currently_playing_id }) => {
  return (
    <tr>
      <RoomMetaData room={room}></RoomMetaData>
      <Track></Track>
    </tr>
  );
};
