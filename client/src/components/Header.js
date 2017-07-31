import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
	renderContent() {
		console.log(this.props);
		switch (this.props.auth.user) {
			case null:
				return;
			case '':
				return (
					<li>
						<a href="/auth/spotify">Log in with Spotify</a>
					</li>
				);
			default:
				return (
					<li>
						<a href="/api/logout">Log Out</a>
					</li>
				);
		}
	}
	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<Link
						to={this.props.auth ? '/search' : '/'}
						className="left brand-logo"
					>
						RabbitHole
					</Link>
					<ul className="right">
						{this.renderContent()}
					</ul>
				</div>
			</nav>
		);
	}
}

function mapStateToProps({ auth }) {
	return { auth };
}

export default connect(mapStateToProps)(Header);
