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
		console.log(movies);
	},
	render: function() {
		var movies= this.state.movies;
		return (
			<div id="container">
			<h1> Here is the movie list:</h1>
			{
				movies.map(function(movie) {
					return <MovieRow key={movie.id} data={movie} />
				}) 
			}
			</div>
		)
	}
});