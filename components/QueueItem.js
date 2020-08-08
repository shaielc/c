import React from 'react';
import Track from './QueueItem/Track';
import User from './QueueItem/User';

import ButtonStyle from './ButtonStyle';
import ButtonDarkStyle from './ButtonDarkStyle';

export default ({ index, item, session, onRemoveItem, onVote }) => {
  return (
    <tr>
      <style jsx>{ButtonStyle}</style>
      <style jsx>{ButtonDarkStyle}</style>
      <Track index={index} item={item} />
      <User item={item} session={session} onRemoveItem={onRemoveItem} onVote={onVote} />
    </tr>
  );
};
