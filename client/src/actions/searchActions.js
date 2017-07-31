import { SEARCH_CHANGED, SUBMIT_SEARCH } from './types';
import HTTP from '../http-common';

export const searchChanged = text => {
	return {
		type: SEARCH_CHANGED,
		payload: text
	};
};

export const submitSearch = (query, accessToken) => async dispatch => {
	try {
		const res = await HTTP.get('/search', {
			params: {
				q: query,
				type: 'artist',
				limit: '5'
			},
			headers: {
				Authorization: 'Bearer ' + accessToken
			}
		});
		dispatch({ type: SUBMIT_SEARCH, payload: res.data.artists });
	} catch (err) {
		console.log('ERROR: ' + err);
	}
};
