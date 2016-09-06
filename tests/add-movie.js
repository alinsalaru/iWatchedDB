import expect from 'expect';
import deepFreeze from 'deep-freeze';

const testAddMovie = (movies) => {
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

export default testAddMovie;