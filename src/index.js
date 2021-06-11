import { ApolloServer } from 'apollo-server';
import clientConnect from './mongo/index.js';

import typeDefs from './schema.js';
import resolvers from './resolvers.js';

import { PORT } from './config/index.js';

clientConnect();

const server = new ApolloServer({
	typeDefs,
	resolvers,
	introspection: true,
	playground: true,
	subscriptions: {
		path: '/subscriptions',
		onConnect: (connectionParams, webSocket, context) => {
			console.log('Client connected');
		},
		onDisconnect: (webSocket, context) => {
			console.log('Client disconnected');
		},
	},
});

server.listen({ port: PORT }).then(({ url }) => {
	console.log(
		`🚀 Subscription endpoint ready at ws://localhost:${PORT}${server.subscriptionsPath}`,
	);
	console.log(`🚀 Apollo Server ready at ${url}`);
});
