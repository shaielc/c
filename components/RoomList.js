import React from 'react';
import Room from './Rooms/Room';

export default ({ rooms }) => {
  console.log(rooms);
  return (
    <table>
      <tbody>
        {rooms.map(room => (
          <Room room={room}></Room>
        ))}
      </tbody>
    </table>
  );
};
