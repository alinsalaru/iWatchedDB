import expect from 'expect';
import deepFreeze from 'deep-freeze';

//movieList
var movieList = [
	{name: 'Batman'},
	{name: 'Pulp Fiction'},
	{name: 'Donnie Darko'}
];

function addMovieToMovieList(nameGiven, movieList) {
    return movieList.concat([{name : nameGiven}]);
}

function removeMovieFromMovieList(index,movieList) {
    return movieList.slice(0,index)
           .concat(movieList.slice(index+1));
}

describe("A simple test: ", function() {
    it("checks to see if null doesn't exists", function() {
        expect(null).toNotExist();
    });
    
    it("checks to see if deepfreeze works properly", function() {
       function tryFreeze(){
            deepFreeze(Buffer);
            Buffer.x = 5;
       }

       expect(tryFreeze).toThrow(/extensible/g);
       
    });

    it("should add new movie", function(){
        deepFreeze(movieList);
        expect( addMovieToMovieList("Batman Returns", movieList)).toInclude(
            {name: 'Batman Returns'}
        );
    });
    it("should remove an existing movie", function(){
        expect(removeMovieFromMovieList(0,movieList)).toExclude(
            {name: 'Batman'}
        );
    });

});