import React from 'react';
import GetRoomNamePlaceholder from '../../placeholders/room_names';

function getName(id) {
  if (!id) {
    return GetRoomNamePlaceholder();
  }
}

export default ({ id }) => {
  return (
    <React.Fragment>
      <td>{getName(id)}</td>
    </React.Fragment>
  );
};
