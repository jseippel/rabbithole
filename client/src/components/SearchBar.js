import React, { Component } from 'react';
import { connect } from 'react-redux';

import SearchResult from './SearchResult';
import { searchChanged, submitSearch } from '../actions';

class SearchBar extends Component {
	onSearchChange = event => {
		this.props.searchChanged(event.target.value);
	};

	onButtonClick = event => {
		const { query, accessToken } = this.props;
		this.props.submitSearch(query, accessToken);
	};
	renderResults() {
		const artists = this.props.results.items || [];
		return artists.map(artist =>
			<SearchResult key={artist.id} id={artist.id} name={artist.name}>
				{console.log(artist.name)}
			</SearchResult>
		);
	}
	render() {
		return (
			<form onSubmit={this.onSubmit}>
				<div className="input-field">
					<input
						type="text"
						value={this.props.query}
						onChange={this.onSearchChange}
					/>
				</div>
				{!this.props.results &&
					<div className="input-field">
						<a
							className="waves-effect waves-light btn"
							onClick={this.onButtonClick}
						>
							See how deep it goes...
						</a>
					</div>}
				<ul className="artistList">
					{this.renderResults()}
				</ul>
			</form>
		);
	}
}

const mapStateToProps = ({ auth, search }) => {
	const { accessToken } = auth;
	const { query, results } = search;
	return { accessToken, query, results };
};

export default connect(mapStateToProps, { searchChanged, submitSearch })(
	SearchBar
);
