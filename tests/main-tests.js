import expect from 'expect';
import deepFreeze from 'deep-freeze';
import testAddMovie from './add-movie';
import testRemoveMovie from './remove-movie';
import testImportList from './import-movielist.js';
import filterMovies from './filter-movies.js';

//movieList
var movieList = [
	{name: 'Batman' , id: 0},
	{name: 'Pulp Fiction', id : 1},
	{name: 'Donnie Darko', id : 2},
	{name: 'Batman Begins', id : 3},
    {name: 'Batman Returns', id : 4}
];

const movies = (state = [], action ) => {
    switch(action.type) {
        case "ADD_MOVIE" : {
            return state.concat([{
                name : action.name,
                id : action.id
            }]);
        }
        case "IMPORT_LIST" : {
            return state.concat(action.listToImport)
        }
        case "REMOVE_MOVIE" : {
            return state.slice(0,action.id)
           .concat(state.slice(action.id+1));
        }
        case "FILTER_BY_NAME" : {
            return state.filter(m=>m.name.toLowerCase().includes(action.text.toLowerCase()));
        }
        default :
            return state;
    }
};

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