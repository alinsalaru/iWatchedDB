import React, {Component} from 'react';
import ButtonsRow from './buttonsrow';

//stateless
export default (props)=>{
	return (
		<tr className="movierow">
			<td>{props.data.name}</td>
			<ButtonsRow movie={props.data} actions={props.actions}/>
		</tr>	
	)
};