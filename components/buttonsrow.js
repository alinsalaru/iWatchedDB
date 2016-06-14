import React,{Component} from 'react';

export default (props)=>{
	let actions = props.actions;
	function deleteMovie() {
		actions.deleteMovie(props.movie.id);
	}
	function addMovie() {
		actions.addMovie('A Clockwork orange');
	}
	return (
		<div className="buttons">
			<a href="#" onClick={deleteMovie}>delete </a>	
			<a href="#" onClick={addMovie}>add a new item</a>	
		</div>
	)
};
