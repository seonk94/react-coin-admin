const { gql } = require('apollo-server');

// Schema definition
const typeDefs = gql`
  type User {
    _id: String
    uid: String!
    name: String!
  }

  type Room {
    _id: String
    name: String!
    status: String
    users: [User]
    ownerUid: String
  }

  type MindMessage {
    emoji: String!
  }

  type Query {
    currentNumber: Int
    mindMessage: MindMessage
    user(uid: String!): User
    users: [User]
    rooms: [Room]
    room: Room
  }

  input UserInput {
    name: String
    uid: String
  }
  input RoomInput {
    name: String
    ownerUid: String
    status: String
  }

  type Mutation {
    createUser(userInput: UserInput): User
    createRoom(roomInput: RoomInput): Room
  }

  type Subscription {
    numberIncremented: Int
    subMindMessage: MindMessage
  }
`;

module.exports = typeDefs;