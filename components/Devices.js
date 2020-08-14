import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import ButtonStyle from '../styles/ButtonStyle';
import ButtonDarkStyle from '../styles/ButtonDarkStyle';
import StyledButton from './StyledButton';
import { fetchAvailableDevices, transferPlaybackToDevice } from '../actions/devicesActions';
import { getIsFetchingDevices } from '../reducers';
import { getDevices } from '../reducers';
class Devices extends React.PureComponent {
  render() {
    const { devices, isFetching, fetchAvailableDevices, transferPlaybackToDevice } = this.props;
    return (
      <div style={{ paddingBottom: '10px' }}>
        <h2>
          <FormattedMessage id="devices.title" />
        </h2>

        <StyledButton
          disabled={isFetching}
          onClick={() => {
            fetchAvailableDevices();
          }}
        >
          <FormattedMessage id="devices.fetch" />
        </StyledButton>
        <style jsx>{ButtonStyle}</style>
        <style jsx>{ButtonDarkStyle}</style>
        {devices.length === 0 ? (
          <p>
            <FormattedMessage id="devices.empty" />
          </p>
        ) : (
          <table>
            <tbody>
              {devices.map(device => (
                <tr>
                  <td>
                    {device.is_active ? (
                      <strong>Active -&gt;</strong>
                    ) : (
                      <StyledButton
                        onClick={() => {
                          transferPlaybackToDevice(device.id);
                        }}
                      >
                        <FormattedMessage id="devices.transfer" />
                      </StyledButton>
                    )}
                  </td>
                  <td>{device.name}</td>
                  <td>{device.type}</td>
                  <td>{device.volume}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchAvailableDevices: index => dispatch(fetchAvailableDevices(index)),
  transferPlaybackToDevice: deviceId => dispatch(transferPlaybackToDevice(deviceId))
});

const mapStateToProps = state => ({
  isFetching: getIsFetchingDevices(state),
  devices: getDevices(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Devices);
