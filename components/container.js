import React, {Component} from 'react';
import MovieRow from './movierow';
import Search from './searchcomponent';

export default class Container extends Component({
	constructor(){
		this.state = {movies : []}
	},
	componentWillMount : function() {
		this.setState({ movies :this.props.movies})
	},
	movieExists : function(id) {
		var movies = this.state.movies;
		return movies.findIndex(el=>(el.id===id)); 
	},
	deleteMovie : function(id){
		var index = this.movieExists(id);
		if (index > -1) {
		    this.props.movies.splice(index, 1);
		}
		this.setState({ movies :this.props.movies});
	},
	addMovie : function(name){
		function getRandomInt(min, max) {
		  return Math.floor(Math.random() * (max - min)) + min;
		};

		var movies = this.state.movies;
		var random = getRandomInt(movies.length+1,1000);

		//if generated id of movie already exists, try again
		while(this.movieExists(random) > -1) { 
			random=getRandomInt(movies.length+1,1000);
		}
		
		movies.push({id:random,name:name});
		this.setState({movies:movies});
	},
	updateList : function(updatedMovieList){
		this.setState({movies: updatedMovieList});
	},
	searchmovie : function(value) {
		var moviesFiltered = this.props.movies.filter(m=>m.name.toLowerCase().includes(value.toLowerCase())) 

		this.setState({movies: moviesFiltered});

	},
	render: function() {
		var movies= this.state.movies.filter(m=>m.name.toLowerCase().includes(value.toLowerCase()));
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
});