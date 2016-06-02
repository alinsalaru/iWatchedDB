import React from 'react';

export default React.createClass({
	delete: function() {
		console.log('delete');
	},
	render: function() {
		var movie =this.props.movie;
		return (
			<div className="buttons">
				<a href="#" onClick={this.delete}>delete me</a>			
			</div>	
		)
	}
});