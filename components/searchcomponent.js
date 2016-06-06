import React from 'react';

export default React.createClass({
	getInitialState : function() {
		return {
			movies : []
		}
	},
	componentWillMount : function() {
		this.setState({ movies :this.props.movies})
	},
	searchmovie : function(element) {
		var movies = this.state.movies;
		//set it first to the initial list - the one received from props
		this.props.updateList(this.props.movies);
		var value = element.target.value;

		if(typeof value!=='undefined'){
			movies= movies.filter(function (movie) {
	    		return movie.name.toLowerCase().indexOf(value.toLowerCase()) != -1;
			});
		}

		//update the list with words found from input
		//remember the 'movies' var is the state in this case
		this.props.updateList(movies);

	},
	render: function(){
		return (
			<div>
				<input type="text" onKeyUp={this.searchmovie} />
			</div>
		);
	}
});