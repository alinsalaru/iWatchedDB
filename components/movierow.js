import React from 'react';
import ButtonsRow from './buttonsrow';

export default React.createClass({
	getInitialState : function() {
		return {
			movie : []
		}
	},
	componentWillMount : function() {
		this.setState({ movie :this.props.data});
	},
	render: function() {
		var movie = this.state.movie;
		return (
			<div className="movierow">
				{this.state.movie.name}
				<ButtonsRow movie={movie} />
			</div>	
		)
	}
});