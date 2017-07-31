import HTTP from '../http-common';

import { PLAY_TRACK_BY_ARTIST } from './types';

export const playTrackByArtist = id => async dispatch => {
	try {
		// const res = await HTTP.get('/search', {
		// 	params: {}
		// });
		// dispatch({ type: PLAY_TRACK_BY_ARTIST, payload: res.data });
	} catch (err) {
		console.log('ERROR: ' + err);
	}
};
