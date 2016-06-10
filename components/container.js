import React, {Component} from 'react';
import MovieRow from './movierow';
import Search from './searchcomponent';

export default class Container extends Component{
	constructor(props){
		super(props);
		this.state = {movies :props.movies};
		this.searchmovie = this.searchmovie.bind(this);
		this.movieExists = this.movieExists.bind(this);
		this.deleteMovie = this.deleteMovie.bind(this);
		this.addMovie = this.addMovie.bind(this);
	}
	movieExists(id) {
		var movies = this.state.movies;
		return movies.findIndex(el=>(el.id===id)); 
	}
	deleteMovie(id){
		var index = this.movieExists(id);
		if (index > -1) {
		    this.state.movies.splice(index, 1);
		}
		this.setState({ movies :this.state.movies});
	}
	addMovie(name){
		function getRandomInt(min, max) {
		  return Math.floor(Math.random() * (max - min)) + min;
		};

		var movies = this.state.movies;
		var random = getRandomInt(movies.length+1,1000);

		//if generated id of movie already exists, try again
		while(this.movieExists(random) > -1) 	{ 
			random=getRandomInt(movies.length+1,1000);
		}
		
		movies.push({id:random,name:name});
		this.setState({movies:movies});
	}
	searchmovie(value) {
		var moviesFiltered = this.props.movies.filter(m=>m.name.toLowerCase().includes(value.toLowerCase())) 
		this.setState({movies: moviesFiltered});

	}
	render() {
		var movies= this.state.movies;
		var actions = {
			deleteMovie : this.deleteMovie,
			addMovie: this.addMovie
		}
		return (
			<div id="container">
				<Search onSearch={this.searchmovie}/>
				<h1>{(movies.length>0) ?  'Here is the movie list': 'You have no movies'}</h1> 
				{
					movies.map(function(movie) {
						return <MovieRow key={movie.id} data={movie} actions={actions} />
					}) 
				}
			</div>
		)
	}
};