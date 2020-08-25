import React from 'react';
import Room from './Rooms/Room';
import * as theme from '../styles/BlueTheme';

const border = '5px solid black';

export default ({ rooms }) => {
  console.log(rooms);
  return (
    <div>
      <style jsx>
        {`
          table {
            margin-left: auto;
            margin-right: auto;
            border-spacing: 0px;
          }

          :global(tr:nth-child(odd)) {
            background-color: ${theme.Dark};
            color: ${theme.Hover};
          }
          :global(tr:nth-child(even)) {
            background-color: ${theme.Middle};
            color: ${theme.Hover};
          }
          :global(tr:hover) {
            background-color: ${theme.Hover};
            color: ${theme.Middle};
          }
          :global(td) {
            border: inherit;
          }
        `}
      </style>
      <table>
        <tbody>
          {rooms.map(room => (
            <Room room={room}></Room>
          ))}
        </tbody>
      </table>
    </div>
  );
};
