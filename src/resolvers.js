const { pubsub } = require('./subscriptions');

let currentNumber = 0;
function incrementNumber() {
  currentNumber++;
  pubsub.publish('NUMBER_INCREMENTED', { numberIncremented: currentNumber });
  setTimeout(incrementNumber, 1000);
}
incrementNumber();

const users = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' }
];

module.exports = {
  Query: {
    currentNumber() {
      return currentNumber;
    },
    users() {
      return users;
    }
  },
  Mutation: {
    createUser: (parent, args, context, info) => {
      const newUser = { ...args };
      users.push(newUser);
      return args;
    },
    createRoom: (parent, args, context, info) => {
      return args;
    }
  },
  Subscription: {
    numberIncremented: {
      subscribe: () => pubsub.asyncIterator(['NUMBER_INCREMENTED'])
    }
  }
};