import React from 'react';
import MovieRow from './movierow';

export default React.createClass({
	render: function() {
		var movies= this.props.movies;
		console.log(movies);
		return (
			<div id="container">
			<h1> Here is the movie list:</h1>
			{
				movies.map(function(movie,index) {  
					return <MovieRow key={index} name={movie}/>
				}) 
			}
			</div>
		)
	}
});