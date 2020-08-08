import React from 'react';

export default ({ index, item }) => {
  return (
    <React.Fragment>
      <td style={{ paddingRight: '10px' }}>
        <img src={item.track.album.images[2].url} width="40" height="40" />
      </td>
      <td style={{ paddingRight: '10px' }}>{index + 1}</td>
      <td style={{ paddingRight: '10px' }}>{item.track.name}</td>
      <td style={{ paddingRight: '10px' }}>{item.track.artists.map(a => a.name).join(', ')}</td>
    </React.Fragment>
  );
};
