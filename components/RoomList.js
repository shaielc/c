import React from 'react';
import Room from './Rooms/Room';

export default ({ rooms }) => {
  console.log(rooms);
  return (
    <tbody>
      {rooms.map(() => (
        <Room></Room>
      ))}
    </tbody>
  );
};
