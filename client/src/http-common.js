import axios from 'axios';

const HTTP = axios.create({
	baseURL: 'https://api.spotify.com/v1/'
});

export default HTTP;
