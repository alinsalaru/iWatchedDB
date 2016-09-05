import expect from 'expect';
import deepFreeze from 'deep-freeze';

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

const testImportList = () => {
    const stateBefore =[];
    const action = {
        type : "IMPORT_LIST",
        listToImport : movieList
    }
    const stateAfter = stateBefore.concat(movieList);
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(movies(stateBefore,action)).toEqual(stateAfter);
    console.log(stateAfter, 'praaa');
}


const testAddMovie = () => {
    const stateBefore = [];
    const action = {
        type : "ADD_MOVIE",
        id : 0,
        name : 'Batman' 
    }
    const stateAfter = [
        {
            id : 0,
            name : 'Batman'
        }
    ]
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(movies(stateBefore,action)).toEqual(stateAfter);

}

const testRemoveMovie = () => {
    const stateBefore = movieList;
    const action = {
        type : "REMOVE_MOVIE",
        id : 0 
    }
    const stateAfter = [
        {name: 'Pulp Fiction', id : 1},
        {name: 'Donnie Darko', id : 2}
    ]
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(movies(stateBefore,action)).toEqual(stateAfter);
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

    it("should add new movie",function() {
        testAddMovie();
    });

    it("should import list of movies", function(){
        testImportList();
    });

    it("should remove movie by id",function() {
        testRemoveMovie();
    });
});