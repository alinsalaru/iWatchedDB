import expect from 'expect';
import deepFreeze from 'deep-freeze';

const testImportList = (movies,movieList) => {
    const stateBefore =[];
    const action = {
        type : "IMPORT_LIST",
        listToImport : movieList
    }
    const stateAfter = stateBefore.concat(movieList);
    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(movies(stateBefore,action)).toEqual(stateAfter);
}

export default testImportList;