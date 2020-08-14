import React from 'react';
import Layout from '../components/MyLayout';
import RoomsList from '../components/RoomList';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/store';
import PageWithIntl from '../components/PageWithIntl';

const placeholder = [1, 2, 3];

export const Lobby = () => {
  return (
    <Layout>
      <RoomsList rooms={placeholder} />
    </Layout>
  );
};

//probabaly needs changes
export default withRedux(initStore, null, null)(PageWithIntl(Lobby));
