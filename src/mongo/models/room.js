import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	users: {
		type: Array,
	},
	status: {
		type: String,
	},
	ownerUser: {
		uid: {
			type: String,
		},
		name: {
			type: String
		}
	}
});

const Room = mongoose.model('Room', roomSchema);
export default Room;
