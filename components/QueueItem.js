import React from 'react';
import Track from './QueueItem/TrackQueueFragment';
import User from './QueueItem/UserQueueFragment';

import ButtonStyle from '../styles/ButtonStyle';
import ButtonDarkStyle from '../styles/ButtonDarkStyle';

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
