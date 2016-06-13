import React, {Component} from 'react';
import ButtonsRow from './buttonsrow';

//stateless
export default (props)=>{
	let movie = props.data,
 		actions = props.actions;
	return (
		<div className="movierow">
			{movie.name}
			<ButtonsRow movie={movie} actions={actions}/>
		</div>	
	)
};