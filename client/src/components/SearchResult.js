import React, { Component } from 'react';
import { connect } from 'react-redux';

import { playTrackByArtist } from '../actions';

class SearchResult extends Component {
	onClick() {
		const { id } = this.props;
		this.props.playTrackByArtist(id);
	}
	render() {
		return (
			<li className="card horizontal">
				<div className="card-content" style={{ margin: 'auto' }}>
					<a href="/play" onClick={this.onClick}>
						{this.props.name}
					</a>
				</div>
			</li>
		);
	}
}

// const mapStateToProps = ({ play }) => {
// 	const { artist, track } = play;
// 	return { artist, track };
// };

// export default connect(mapStateToProps, { playTrackByArtist })(SearchResult);
export default SearchResult;
