const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
	spotifyID: String,
	accessToken: String,
	refreshToken: String
});

mongoose.model('users', userSchema);
