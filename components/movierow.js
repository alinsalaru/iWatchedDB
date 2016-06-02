import React from 'react';
import ButtonsRow from './buttonsrow';

export default React.createClass({
	render: function() {
		var movie = this.props.data;
		return (
			<div className="movierow">
				{this.props.data.name}
				<ButtonsRow movie={movie} />
			</div>	
		)
	}
});