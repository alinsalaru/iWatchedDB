import React, {Component} from 'react';
import MovieRow from './movierow';
import Search from './searchcomponent';

export default class Container extends Component{
	constructor(props){
		super(props);
		this.state = {movies :props.movies, searchValue : ''};
		this.searchmovie = this.searchmovie.bind(this);
		this.movieExists = this.movieExists.bind(this);
		this.deleteMovie = this.deleteMovie.bind(this);
		this.addMovie = this.addMovie.bind(this);
	}
	movieExists(id) {
		let movies = this.props.movies;
		return movies.findIndex(el=>(el.id===id)); 
	}
	deleteMovie(id){
		let index = this.movieExists(id);
		index > -1 && this.props.movies.splice(index, 1);
		this.setState({ movies :this.props.movies});
	}
	addMovie(name){
		//validate entered text
		name = name.trim();
		if(name === '') {return;}

		function getRandomInt(min, max) {
		  return Math.floor(Math.random() * (max - min)) + min;
		};

		let movies = this.props.movies;
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
		this.setState({movies: moviesFiltered, searchValue : value});
	}
	render() {
		let movies= this.state.movies,
			searchValue = this.state.searchValue,
			actions = {
				deleteMovie : this.deleteMovie,
				addMovie: this.addMovie
			},
			rows = movies.map(movie=>{
				return <MovieRow key={movie.id} data={movie} actions={actions} />
			});
		return (
			<div className="container-fluid">
				<h2>{(rows.length>0) ?  'Here is the movie list:': 'We couldn\'t find any movies matching your search.'}</h2> 
				<div className="row">
					<div className="col-xs-8">
						<Search onSearch={this.searchmovie}/>
					</div>
					<div className="col-xs-4">
						<button type="button" className="btn btn-primary"
							onClick={function() {actions.addMovie(searchValue)}}>Add Movie</button>
					</div>
				</div>
				{(rows.length===0) && <a href="#" onClick={function() {actions.addMovie(searchValue)}}>Add missing movie?</a> }

				{(rows.length>0) &&
					<table className="table table-hover">
					<thead>
						<tr>
							<th>Title</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
				}
			</div>
		)
	}
};