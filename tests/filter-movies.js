import expect from 'expect';
import deepFreeze from 'deep-freeze';

const filterBy = (movies,movieList) => {
    const stateBefore = movieList;
    const action = {
        type : "FILTER_BY_NAME",
        text : "Batman" 
    }
    const stateAfter = movieList.filter(m=>m.name.toLowerCase().includes(action.text.toLowerCase()));

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(movies(stateBefore,action)).toEqual(stateAfter);

}
export default filterBy;