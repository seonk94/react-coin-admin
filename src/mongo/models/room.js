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
	ownerUid: {
		type: String,
	},
});

const Room = mongoose.model('Room', roomSchema);
export default Room;
