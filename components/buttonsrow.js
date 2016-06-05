import React from 'react';

export default React.createClass({
	getInitialState : function() {
		return {
			movie : []
		}
	},
	componentWillMount : function() {
		this.setState({ movie :this.props.movie})
	},
	delete: function() {
		this.props.actions.deleteMovie(this.state.movie.id);
	},
	addMovie : function() {
		this.props.actions.addMovie('A Clockwork orange');
	},
	render: function() {
		var movie =this.state.movie;
		return (
			<div className="buttons">
				<a href="#" onClick={this.delete}>delete me</a>	
				<br/>
				<a href="#" onClick={this.addMovie}>add a new item</a>	
			</div>
		)
	}
});