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
		var movieState = this.state.movie;
		var actions = this.props.actions
		return (
			<div className="movierow">
				{this.state.movie.name}
				<ButtonsRow movie={movieState} actions={actions}/>
			</div>	
		)
	}
});