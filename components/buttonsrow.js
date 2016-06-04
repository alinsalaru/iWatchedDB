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
		this.props.deleteMovie(this.state.movie.id);
	},
	render: function() {
		var movie =this.state.movie;
		return (
			<div className="buttons">
				<a href="#" onClick={this.delete}>delete me</a>			
			</div>
		)
	}
});