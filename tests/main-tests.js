import expect from 'expect';
import deepFreeze from 'deep-freeze';
import testAddMovie from './add-movie';
import testRemoveMovie from './remove-movie';
import testImportList from './import-movielist.js';

//movieList
var movieList = [
	{name: 'Batman' , id: 0},
	{name: 'Pulp Fiction', id : 1},
	{name: 'Donnie Darko', id : 2}
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
});