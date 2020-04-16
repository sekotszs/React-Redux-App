import axios from "axios";

export const FETCH_MOVIES_START = "FETCH_MOVIES_START";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";


//call API  start fetincg movie
export const fetchMovies = () =>{
    return dispatch =>{
        dispatch({type: FETCH_MOVIES_START})
axios
.get('https://ghibliapi.herokuapp.com/films')
.then(res => {
    dispatch({type: FETCH_MOVIES_SUCCESS, payload:res.data})

})
.catch(err => {
    dispatch({type: FETCH_MOVIES_FAILURE, payload: err.response.statusText})

})
}}
