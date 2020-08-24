import React from 'react';
import Layout from '../components/MyLayout';
import RoomsList from '../components/RoomList';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store/store';
import PageWithIntl from '../components/PageWithIntl';
import { fetchRooms } from '../actions/roomsActions';

class Lobby extends React.Component {
  static getInitialProps({ req, store, isServer }) {
    return Promise.all([store.dispatch(fetchRooms())]);
  }
  render() {
    return (
      <Layout>
        <RoomsList rooms={this.props.rooms} />
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  rooms: state.rooms
});

//probabaly needs changes
export default withRedux(initStore, mapStateToProps, null)(PageWithIntl(Lobby));
