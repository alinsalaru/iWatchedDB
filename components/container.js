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
		let movies = this.state.movies;
		return movies.findIndex(el=>(el.id===id)); 
	}
	deleteMovie(id){
		let index = this.movieExists(id);
		index > -1 && this.state.movies.splice(index, 1);
		this.setState({ movies :this.state.movies});
	}
	addMovie(name){
		function getRandomInt(min, max) {
		  return Math.floor(Math.random() * (max - min)) + min;
		};

		let movies = this.state.movies;
		let random = getRandomInt(movies.length+1,1000);

		//if generated id of movie already exists, try again
		while(movies.findIndex(el=>(el.id===random)) > -1) { 
			random=getRandomInt(movies.length+1,1000);
		}
		
		movies.push({id:random,name:name})
		this.setState({movies:movies});
	}
	searchmovie(value) {
		let moviesFiltered = this.props.movies.filter(m=>m.name.toLowerCase().includes(value.toLowerCase())); 
		this.setState({movies: moviesFiltered});
	}
	render() {
		let movies= this.state.movies,
			actions = {
				deleteMovie : this.deleteMovie,
				addMovie: this.addMovie
			},
			rows = movies.map(movie=>{
				return <MovieRow key={movie.id} data={movie} actions={actions} />
			});
		return (
			<div id="container">
				<Search onSearch={this.searchmovie}/>
				<h1>{(movies.length>0) ?  'Here is the movie list': 'You have no movies'}</h1> 
				{rows}
			</div>
		)
	}
};