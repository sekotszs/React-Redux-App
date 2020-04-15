import React, {useEffect} from 'react';
import {fetchMovies} from "../actions"

const Movie = props => {
    useEffect(() => {
        props.fetchMovies();
        },[])
}