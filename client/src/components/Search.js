import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import ResultsList from './ResultsList';

class Search extends Component {
	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<h1>Search an artist.</h1>
				<SearchBar />
				<ResultsList />
			</div>
		);
	}
}

const mapStateToProps = ({ auth }) => {
	const { accessToken, refreshToken } = auth;
	return { accessToken, refreshToken };
};

export default connect(mapStateToProps)(Search);
