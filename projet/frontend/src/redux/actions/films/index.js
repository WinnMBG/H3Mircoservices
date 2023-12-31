import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:5000/'
axios.defaults.withCredentials = false

// ** GET Account settings
export const getFilmsFavorite = params => {
  return dispatch => {
    return axios.get('/films').then(res => {
      dispatch({
        type: 'GET_FILMS',
        data: res.data,
        params
      })
    })
  }
}

export const addFilm = (film, filmId) => {
    return (dispatch, getState) => {
      const filmTmp = { ...film }
      filmTmp.id = filmId ? filmId : null
      axios.post('/film', filmTmp).then(res => {
        dispatch({
          type: 'ADD_FILM',
          data: res.data,
          filmTmp
        })
      })
    }
  }

  export const deleteFilm = (filmId) => {
    return (dispatch, getState) => {
      axios.delete(`/film/${filmId}`).then(res => {
        dispatch({
          type: 'DELETE_FILM',
          data: res.data.id,
        })
      })
    }
  }