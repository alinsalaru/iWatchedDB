import React, {Component} from 'react';
import MovieRow from './movierow';

export default class Container extends Component{
	constructor(props){
		super(props);
		this.state = {movies :props.movies, searchValue : ''};
		this.movieExists = this.movieExists.bind(this);
		this.deleteMovie = this.deleteMovie.bind(this);
		this.addMovie = this.addMovie.bind(this);
	}
		
	movieExists(id) {
		let movies = this.props.movies;
		return movies.findIndex(el=>(el.id===id)); 
	}
	deleteMovie(id){
		let index = this.movieExists(id);
		index > -1 && this.props.movies.splice(index, 1);
		this.setState({ movies :this.props.movies});
	}
	addMovie(name){
		//validate entered text
		name = name.trim();
		if(name === '') {return;}

		function getRandomInt(min, max) {
		  return Math.floor(Math.random() * (max - min)) + min;
		};

		let movies = this.props.movies;
		let random = getRandomInt(movies.length+1,1000);

		//if generated id of movie already exists, try again
		while(movies.findIndex(el=>(el.id===random)) > -1) { 
			random=getRandomInt(movies.length+1,1000);
		}
		
		movies.push({id:random,name:name})
		this.setState({movies:movies});
	}
	render(){
		let movies= this.props.movies,
			actions = {
				addMovie: this.addMovie,
				deleteMovie : this.deleteMovie
			},	
			rows = movies.map(movie=>{
				return <MovieRow key={movie.id} data={movie} actions={actions} />
			});
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>Year</th>
						<th>Title</th>
						<th>Directors</th>
						<th>My rating</th>
						<th>Imdb</th>
						<th>Rotten</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		)
	}
}
