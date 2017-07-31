import React, { Component } from 'react';
import { connect } from 'react-redux';

class Landing extends Component {
	render() {
		return (
			<div style={{ textAlign: 'center' }}>
				<h1>Welcome to Rabbit Hole!</h1>
				<h2>
					Choose an artist and follow them through a series of
					randomly picked related artists.
				</h2>
				<a
					href={this.props.auth ? '/search' : '/auth/spotify'}
					className="waves-effect waves-light btn"
				>
					See how deep it goes...
				</a>
			</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Landing);
