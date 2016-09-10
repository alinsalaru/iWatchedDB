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

export default movies