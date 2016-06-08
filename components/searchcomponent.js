import React from 'react';

export default React.createClass({
	getInitialState : function() {
		return {
			allMoviesList : []
		}
	},
	componentWillMount : function() {
		this.setState({ allMoviesList :this.props.movies})
	},
	searchmovie : function(element) {
		var value = element.target.value;
		var moviesFiltered = this.state.allMoviesList;

		if(typeof value!=='undefined'){
			moviesFiltered= moviesFiltered.filter(function (movie) {
	    		return movie.name.toLowerCase().indexOf(value.toLowerCase()) != -1;
			});
		}

		//update the list with words found from input
		//remember the 'moviesFiltered' var is the state in this case
		// this state never modifies, so that's why it keeps the movielist
		this.props.updateList(moviesFiltered);

	},
	render: function(){
		return (
			<div>
				<input type="text" onKeyUp={this.searchmovie} />
			</div>
		);
	}
});