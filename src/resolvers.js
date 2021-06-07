const { pubsub } = require('./subscriptions');
const { User, Room } = require('./mongo/models');

module.exports = {
  Query: {
    user: async (_, args) => {
      const user = await User.findOne({ uid: args.uid });
      return user;
    },
    users: async (_, args) => {
      const users = await User.find();
      return users;
    },
    room: async (_, args) => {
      const room = await Room.findOne({ _id: args._id });
      return room;
    },
    rooms: async (_, args) => {
      const rooms = await Room.find();
      return rooms;
    },
    mindMessage: () => {
      return {
        emoji: '❤'
      };
    }
  },
  Mutation: {
    createUser: async (parent, args, context, info) => {
      const findUser = await User.findOne({ uid: args.userInput.uid });
      if (findUser) return findUser;
      const user = new User({
        ...args.userInput
      });
      const result = await user.save();
      return result;
    },
    createRoom: async (parent, args, context, info) => {
      const room = new Room({
        ...args.roomInput,
        status: 'wait'
      });
      const result = await room.save();
      return result;
    }
  },
  Subscription: {
    subMindMessage: {
      subscribe: (args) => {
        return pubsub.asyncIterator(['SUB_EMOJI']);
      }
    },
    pubMindMessage: {
      subscribe: (args) => {
        return pubsub.asyncIterator(['PUB_EMOJI']);
      }
    }
  }
};
