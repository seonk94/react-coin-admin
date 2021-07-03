import { gql } from 'apollo-server';

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
		ownerUser: User
	}

	type EmojiMessage {
		emoji: String
		uid: String
		roomId: String
	}

	type Query {
		user(uid: String!): User
		users: [User]
		room(_id: String!): Room
		rooms: [Room]
	}

	input UserInput {
		name: String
		uid: String
	}
	input RoomInput {
		name: String
		status: String
		ownerUser: UserInput
	}
	input PostEmojiMessageInput {
		emoji: String
		roomId: String
		uid: String
	}

	type Mutation {
		createUser(userInput: UserInput): User
		createRoom(roomInput: RoomInput): Room
		postEmojiMessage(postEmojiMessageInput: PostEmojiMessageInput): EmojiMessage
	}

	type Subscription {
		subEmojiMessage: EmojiMessage
	}
`;

export default typeDefs
