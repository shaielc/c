const uuidV4 = require('uuid/v4');

class Room {
  constructor({ ...options }) {
    this.id = options.id || uuidV4();
    this.name = options.name;
    this.currentlyPlaying = options.track || {};
    this.owner = options.user || {};
    this.creationTime = options.timestamp || Date.now();
    this.users = options.users || new Set();
  }
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      currentlyPlaying: this.currentlyPlaying,
      owner: this.owner,
      creationTime: this.creationTime
    };
  }
}

module.exports = Room;
