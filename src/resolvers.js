const { pubsub } = require('./subscriptions');
const { User, Room } = require('./mongo/models');

let currentNumber = 0;
function incrementNumber() {
  currentNumber++;
  pubsub.publish('NUMBER_INCREMENTED', { numberIncremented: currentNumber });
  setTimeout(incrementNumber, 10000);
}
incrementNumber();

module.exports = {
  Query: {
    currentNumber() {
      return currentNumber;
    },
    users: async (_, args) => {
      const users = await User.find();
      return users;
    },
    rooms: async (_, args) => {
      const rooms = await Room.find();
      return rooms;
    }
  },
  Mutation: {
    createUser: async (parent, args, context, info) => {
      const user = new User({
        ...args.userInput
      });
      const result = await user.save();
      return result;
    },
    createRoom: async (parent, args, context, info) => {
      const room = new Room({
        ...args.roomInput
      });
      const result = await room.save();
      return result;
    }
  },
  Subscription: {
    numberIncremented: {
      subscribe: () => pubsub.asyncIterator(['NUMBER_INCREMENTED'])
    }
  }
};