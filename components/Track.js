import React from 'react';

export default ({ track }) => {
  return (
    <React.Fragment>
      <td style={{ paddingRight: '10px' }}>
        <img src={track.album.images[2].url} width="40" height="40" />
      </td>
      <td style={{ paddingRight: '10px' }}>{track.name}</td>
      <td style={{ paddingRight: '10px' }}>{track.artists.map(a => a.name).join(', ')}</td>
    </React.Fragment>
  );
};
