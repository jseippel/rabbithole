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
		(accessToken, refreshToken, profile, done) => {
			User.findOne({ spotifyID: profile.id }).then(existingUser => {
				if (existingUser) {
					//  We already have a user. Don't make a new one.
					done(null, existingUser);
				} else {
					// Create a new user
					new User({ spotifyID: profile.id })
						.save()
						.then(user => done(null, user));
				}
			});
		}
	)
);
