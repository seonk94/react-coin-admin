const { gql } = require('apollo-server');

// Schema definition
const typeDefs = gql`
  type User {
    _id: String
    name: String!
  }

  type Room {
    _id: String
    name: String!
    users: [User]
  }

  type Query {
    currentNumber: Int
    users: [User]
    user: User
    rooms: [Room]
    room: Room
  }
  input UserInput {
    name: String
  }
  input RoomInput {
    name: String
  }

  type Mutation {
    createUser(userInput: UserInput): User
    createRoom(roomInput: RoomInput): Room
  }

  type Subscription {
    numberIncremented: Int
  }
`;

module.exports = typeDefs;