import React from 'react';

export default React.createClass({
	render: function() {
		return (
			<div className="movierow">
				{this.props.name}
			</div>	
		)
	}
});