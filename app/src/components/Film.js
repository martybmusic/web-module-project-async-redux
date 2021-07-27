import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFilm } from '../actions';

const Film = (props) => {
    const { film, isFetching, error } = props
    useEffect(() => {
        props.getFilm()
    }, []);

    if (error) {
        return <h3>Apologies, our films have vanished: {error}</h3>;
    }

    if (isFetching) {
        return <h3>One moment, we're retrieving your film...</h3>
    }

    const handleClick = () => {
        props.getFilm()
    }

    return (
        <>
          <div>
              <h2>Our curator reccomends:</h2>
              <h1>{film.properties.title}</h1>
              <h3>{film.properties.director}</h3>
              <p>{film.properties.release_date}</p>
          </div>
          <button onClick={handleClick}>Another Reccomendation</button>
        </>
    );
};

const mapStateToProps = state => {
    return {
        film: state.film,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, {getFilm})(Film);