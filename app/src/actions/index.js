import axios from 'axios';

export const FETCH_FILM_LOADING = "FETCH_FILM_LOADING"
export const FETCH_FILM_SUCCESS = "FETCH_FILM_SUCCESS"
export const FETCH_FILM_FAIL = "FETCH_FILM_FAIL"

export const getFilm = () => {
    return dispatch => {
        dispatch(fetchFilmLoading())
        axios.get('')
            .then(res => {
                dispatch(fetchFilmSuccess(res.data.results[0]))
            })
            .catch(err => {
                dispatch(err.error)
            })
    }
}

export const fetchFilmLoading = () => {
    return ({type: FETCH_FILM_LOADING})
}

export const fetchFilmSuccess = () => {
    return ({type: FETCH_FILM_SUCCESS})
}

export const fetchFilmFail = () => {
    return ({type: FETCH_FILM_FAIL})
}