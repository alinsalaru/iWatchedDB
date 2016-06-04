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
	deleteMovie : function(id){
		var movies = this.state.movies;
		var index;
		for (var i = 0; i < movies.length; i++) {
			if(movies[i].id === id) {
				index = i;
			}
		}
		if (index > -1) {
		    movies.splice(index, 1);
		}
		this.setState({ movies :this.props.movies});
	},
	render: function() {
		var movies= this.state.movies;
		var deleteMovie =this.deleteMovie;
		return (
			<div id="container">
			<h1>{(movies.length>0) ?  'Here is the movie list': 'You have no movies'}</h1> 
			{
				movies.map(function(movie) {
					return <MovieRow key={movie.id} data={movie} deleteMovie={deleteMovie} />
				}) 
			}
			</div>
		)
	}
});