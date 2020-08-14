import React from 'react';
import Track from '../Track';
import PlaceHolderTrack from '../../placeholders/track';

function getTrack(track) {
  if (!track) {
    return PlaceHolderTrack;
  }
  return track;
}

export default ({ track }) => {
  return <Track track={getTrack(track)}></Track>;
};
