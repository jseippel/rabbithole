const passport = require('passport');

module.exports = app => {
	app.get(
		'/auth/spotify',
		passport.authenticate('spotify', {
			scope: ['user-read-private', 'user-read-email']
		})
	);

	app.get(
		'/auth/spotify/callback',
		passport.authenticate('spotify'),
		(req, res) => {
			res.cookie('access_token', req.user.access_token);
			res.cookie('refresh_token', req.user.refresh_token);
			res.redirect('/search');
		}
	);

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.clearCookie('access_token');
		res.clearCookie('refresh_token');
		res.redirect('/');
	});

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});
};
