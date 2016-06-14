import React, {Component} from 'react';
import ButtonsRow from './buttonsrow';

//stateless
export default (props)=>{
	return (
		<div className="movierow">
			{props.data.name}
			<ButtonsRow movie={props.data} actions={props.actions}/>
		</div>	
	)
};