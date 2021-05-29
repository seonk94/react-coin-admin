const { gql } = require('apollo-server');

// Schema definition
const typeDefs = gql`
  type User {
    id: Int!
    name: String!
  }

  type Room {
    id: Int!
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

  type Mutation {
    createUser(id: Int, name: String): User
    createRoom(id: Int, name: String): Room
  }

  type Subscription {
    numberIncremented: Int
  }
`;

module.exports = typeDefs;