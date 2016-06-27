import React,{Component} from 'react';

export default (props)=>{
	let actions = props.actions;
	function deleteMovie() {
		actions.deleteMovie(props.movie.id);
	}
	return (
		<td className="buttons">
			<a href="#" onClick={deleteMovie}>delete </a>	
		</td>
	)
};
