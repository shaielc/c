import React from 'react';
import GetRoomNamePlaceholder from '../../placeholders/room_names';

export default ({ name }) => {
  return (
    <React.Fragment>
      <td>{name}</td>
    </React.Fragment>
  );
};
