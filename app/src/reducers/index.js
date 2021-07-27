import { FETCH_FILM_FAIL, FETCH_FILM_LOADING, FETCH_FILM_SUCCESS} from '../actions';

const initialState = {
    film: {
      properties: {
        title: '',
        director: '',
        release_date: '',
      },
    },
    isFetching: false,
    error: null
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(FETCH_FILM_LOADING):
          return ({
              ...state,
              isFetching: true
          })
        case(FETCH_FILM_SUCCESS):
          return ({
              ...state,
              film: action.payload,
              isFetching: false
          })
          case(FETCH_FILM_FAIL):
            return({
                ...state,
                error: action.payload,
                isFetching: false
            })
          default:
              return state;
    }
};