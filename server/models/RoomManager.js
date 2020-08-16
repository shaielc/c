// TODO: Add rooms serialization

class RoomManager {
  constructor(options) {
    this.rooms = options.rooms || [];
    this.users = options.users || {};
    this.onUserLeave = options.onUserLeave;
    this.onUserJoin = options.onUserJoin;
  }

  kickUser(room, targetUser, requestingUser) {
    if (!room.users.has(targetUser.id)) {
      return new Error('User is not in room');
    }
    if (requestingUser.id == targetUser.id || room.owner == user.id) {
      this.room.users.delete(user.id);
      delete this.users[user.id];
      this.onUserLeave(user.id);
    }
  }

  addUser(room, user) {
    if (user.id in this.users) {
      const currentRoom = this.users[user.id];
      if (currentRoom.id === room.id) {
        return;
      } else if (currentRoom) {
        this.kickUser(currentRoom, user, user);
      }
    }
    room.users.add(user.id);
    this.onUserJoin(user.id);
  }
}

module.exports = RoomManager;
