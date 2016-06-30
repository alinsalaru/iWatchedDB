import React, {Component} from 'react';
import Search from './searchcomponent';
import MovieTable from './MovieTable';

export default class Container extends Component{
	constructor(props){
		super(props);
		this.state = {movies :props.movies, searchValue : ''};
		this.searchmovie = this.searchmovie.bind(this);
	}
	searchmovie(value) {
		let moviesFiltered = this.props.movies.filter(m=>m.name.toLowerCase().includes(value.toLowerCase())); 
		this.setState({movies: moviesFiltered, searchValue : value});
	}
	render() {
		let movies= this.state.movies,
			searchValue = this.state.searchValue;
		return (
			<div className="container-fluid">
				<h2>{(movies.length>0) ?  'Here is the movie list:': 'We couldn\'t find any movies matching your search.'}</h2> 
				<div className="row">
					<div className="col-xs-8">
						<Search onSearch={this.searchmovie}/>
					</div>
				</div>
				{(movies.length===0) && <a href="#" onClick={function() {/*actions.addMovie(searchValue)}*/}}>Add missing movie?</a> }

				{(movies.length>0) &&
					<MovieTable movies={movies} />
				}
			</div>
		)
	}
};