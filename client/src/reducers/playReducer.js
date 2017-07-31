import { PLAY_TRACK_BY_ARTIST } from '../actions/types';

const INITIAL_STATE = {
	artist: '',
	track: '',
	bio: '',
	img: ''
};

export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case PLAY_TRACK_BY_ARTIST:
			return {
				...state,
				artist: action.payload.artist,
				track: action.payload.track,
				bio: action.payload.bio,
				img: action.payload.img
			};
		default:
			return state;
	}
}
