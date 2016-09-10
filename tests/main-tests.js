import expect from 'expect';
import deepFreeze from 'deep-freeze';
import testAddMovie from './add-movie';
import testRemoveMovie from './remove-movie';
import testImportList from './import-movielist.js';
import filterMovies from './filter-movies.js';
import movies from '../reducers/movies.js';

//movieList
var movieList = [
	{name: 'Batman' , id: 0},
	{name: 'Pulp Fiction', id : 1},
	{name: 'Donnie Darko', id : 2},
	{name: 'Batman Begins', id : 3},
    {name: 'Batman Returns', id : 4}
];

describe("A simple test: ", function() {

    it("should add new movie",function() {
        testAddMovie(movies);
    });

    it("should import list of movies", function(){
        testImportList(movies,movieList);
    });

    it("should remove movie by id",function() {
        testRemoveMovie(movies,movieList);
    });

    it("should filter movie by text",function() {
        filterMovies(movies,movieList);
    });
});