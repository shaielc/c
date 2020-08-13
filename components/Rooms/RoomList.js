import React from 'react';
import Room from './Room';

export default ({ rooms }) => {
  console.log(rooms);
  return (
    <ul>
      {rooms.map(() => (
        <Room></Room>
      ))}
    </ul>
  );
};
