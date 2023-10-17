const initialState = {
    films: []
}
  
  const filmReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_FILMS':
        return { ...state, films: action.data }
      case 'ADD_FILM':
        return { ...state, films: [...state.films, action.data] }
      case "DELETE_FILM":
        const updatedFilms = state.films.filter(
          (film) => film._id !== action.data
        );
        return { ...state, films: updatedFilms };
      default:
        return state
    }
  }
  
  export default filmReducer
  