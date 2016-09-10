const initialState = {
    movies : [],
    filter_by : {
        name : ''
    }
} 
const filterBy = (state = '', action) => {
     switch (action.type) {
        case "FILTER_BY_NAME" :
        return state.filter(m=>m.name.toLowerCase().includes(action.text.toLowerCase()));
     }
}
const movieApp = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_MOVIE" : 
        case "IMPORT_LIST" : 
        case "REMOVE_MOVIE" : 
        case "FILTER_BY_NAME" : 
        return Object.assign({}, state, {
            movies: movies(state.movies, action)
        });
        default :
            return state;
    }
}