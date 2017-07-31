const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	});
});

passport.use(
	new SpotifyStrategy(
		{
			clientID: keys.spotifyClientID,
			clientSecret: keys.spotifyClientSecret,
			callbackURL: '/auth/spotify/callback',
			proxy: true
		},
		async (accessToken, refreshToken, profile, done) => {
			const existingUser = await User.findOne({ spotifyID: profile.id });
			if (existingUser) {
				existingUser.access_token = accessToken;
				existingUser.refresh_token = refreshToken;
				existingUser.save();
				return done(null, existingUser);
			}

			const user = await new User({
				spotifyID: profile.id,
				access_token: accessToken,
				refresh_token: refreshToken
			}).save();
			done(null, user);
		}
	)
);
