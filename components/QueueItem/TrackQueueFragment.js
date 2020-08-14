import React from 'react';

import Track from '../Track';

export default ({ index, item }) => {
  return (
    <React.Fragment>
      <td style={{ paddingRight: '10px' }}>{index + 1}</td>
      <Track item={item.track}></Track>
    </React.Fragment>
  );
};
