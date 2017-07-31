import axios from 'axios';
import { FETCH_USER, SAVE_TOKENS } from './types';

export const fetchUser = () => async dispatch => {
	try {
		const res = await axios.get('/api/current_user');
		dispatch({ type: FETCH_USER, payload: res.data });
	} catch (err) {
		return;
	}
};

export const saveTokens = () => {
	return {
		type: SAVE_TOKENS,
		payload: {
			accessToken: document.cookie.replace(
				/(?:(?:^|.*;\s*)access_token\s*\=\s*([^;]*).*$)|^.*$/,
				'$1'
			),
			refreshToken: document.cookie.replace(
				/(?:(?:^|.*;\s*)refresh_token\s*\=\s*([^;]*).*$)|^.*$/,
				'$1'
			)
		}
	};
};
