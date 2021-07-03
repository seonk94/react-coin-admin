import { pubsub } from './subscriptions.js';
import { User, Room } from './mongo/models/index.js';

const resolvers = {
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
	},
	Mutation: {
		createUser: async (parent, args, context, info) => {
			const findUser = await User.findOne({ uid: args.userInput.uid });
			if (findUser) return findUser;
			const user = new User({
				...args.userInput,
			});
			const result = await user.save();
			return result;
		},
		createRoom: async (parent, args, context, info) => {
			const room = new Room({
				...args.roomInput,
				users: [],
			});
			const result = await room.save();
			return result;
		},
		postEmojiMessage: (_, args) => {
			const payload = {
				subEmojiMessage: {
					...args.postEmojiMessageInput
				}
			}
			pubsub.publish('SUB_EMOJI', payload);
			return {
				...args.postEmojiMessageInput
			}
		}
	},
	Subscription: {
		subEmojiMessage: {
			subscribe: () => {
				return pubsub.asyncIterator(['SUB_EMOJI']);
			},
		},
	},
};

export default resolvers;
