import React from 'react';
import MovieRow from './movierow';

export default React.createClass({
	getInitialState : function() {
		return {
			movies : []
		}
	},
	componentWillMount : function() {
		this.setState({ movies :this.props.movies})
	},
	movieExists : function(id) {
		var movies = this.state.movies;
		var index =-1;
		for (var i = 0; i < movies.length; i++) {
			if(movies[i].id === id) {
				index = i;
			}
			break;
		}
		return index;
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

		var movies= this.state.movies;
		var random  = getRandomInt(movies.length+1,1000);

		//if generated id of movie already exists, try again
		this.movieExists(random) > -1 ? random=getRandomInt(movies.length+1,1000) :'';
		
		movies.push({id:random,name:name});
		this.setState({movies:movies});
	},
	render: function() {
		var movies= this.state.movies;
		var actions = {
			deleteMovie : this.deleteMovie,
			addMovie: this.addMovie
		}
		return (
			<div id="container">
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