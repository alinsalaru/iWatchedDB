import React, {Component} from 'react';
import ButtonsRow from './buttonsrow';

export default class MovieRow extends Component{
	constructor(props){
		super(props);
		this.state ={movie : props.data};
	}
	render() {
		var movieState = this.state.movie,
	 		actions = this.props.actions;
		return (
			<div className="movierow">
				{movieState.name}
				<ButtonsRow movie={movieState} actions={actions}/>
			</div>	
		)
	}
};