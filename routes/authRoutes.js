const passport = require('passport');

module.exports = app => {
	app.get(
		'/auth/spotify',
		passport.authenticate('spotify', {
			scope: ['user-read-private', 'user-read-email']
		})
	);

	app.get('/auth/spotify/callback', passport.authenticate('spotify'));

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.send(req.user);
	});

	app.get('/api/current_user', (req, res) => {
		res.send(req.session);
	});
};
