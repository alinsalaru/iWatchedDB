import expect from 'expect';
import deepFreeze from 'deep-freeze';

const testRemoveMovie = (movies,movieList) => {
    const stateBefore = movieList;
    const action = {
        type : "REMOVE_MOVIE",
        id : 0 
    }
    const stateAfter = [
        {name: 'Pulp Fiction', id : 1},
        {name: 'Donnie Darko', id : 2},
        {name: 'Batman Begins', id : 3},
        {name: 'Batman Returns', id : 4}
    ]
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(movies(stateBefore,action)).toEqual(stateAfter);
}

export default testRemoveMovie;
