const placehoders = ["Joe's room", 'Rock radio', "May's party"];
const track = require('./track');
const Room = require('../server/models/Room');
module.exports = placehoders.map(
  roomName =>
    new Room({
      track: track,
      name: roomName
    })
);
