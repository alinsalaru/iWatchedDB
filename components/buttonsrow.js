import React,{Component} from 'react';

export default class ButtonsRow extends Component{
	constructor(props){
		super(props);
		this.state = {movie : props.movie};
		this.delete = this.delete.bind(this);
		 this.addMovie = this.addMovie.bind(this);
	}
	delete() {
		this.props.actions.deleteMovie(this.state.movie.id);
	}
	addMovie () {
		this.props.actions.addMovie('A Clockwork orange');
	}
	render() {
		var movie =this.state.movie;
		var deleteMovie = this.delete;
		var addMovie = this.addMovie;
		return (
			<div className="buttons">
				<a href="#" onClick={deleteMovie}>delete me</a>	
				<br/>
				<a href="#" onClick={addMovie}>add a new item</a>	
			</div>
		)
	}
};