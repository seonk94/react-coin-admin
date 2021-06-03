const { ApolloServer } = require('apollo-server');
const clientConnect = require('./mongo');
const PORT = 4000;

clientConnect();

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  subscriptions: {
    path: '/subscriptions',
    onConnect: (connectionParams, webSocket, context) => {
      console.log('Client connected');
    },
    onDisconnect: (webSocket, context) => {
      console.log('Client disconnected');
    }
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Subscription endpoint ready at ws://localhost:${PORT}${server.subscriptionsPath}`);
  console.log(`🚀 Apollo Server ready at ${url}`);
});


