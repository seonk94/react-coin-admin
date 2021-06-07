const { ApolloServer } = require("apollo-server");
const clientConnect = require("./mongo");
const { port } = require("./config");
clientConnect();

const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  subscriptions: {
    path: "/subscriptions",
    onConnect: (connectionParams, webSocket, context) => {
      console.log("Client connected");
    },
    onDisconnect: (webSocket, context) => {
      console.log("Client disconnected");
    },
  },
});

server.listen({ port: port }).then(({ url }) => {
  console.log(
    `🚀 Subscription endpoint ready at ws://localhost:${port}${server.subscriptionsPath}`
  );
  console.log(`🚀 Apollo Server ready at ${url}`);
});
