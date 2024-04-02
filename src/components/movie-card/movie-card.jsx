import React from "react";
import PropTypes from "prop-types";
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./movie-card.scss";

export const MovieCard = ({movieData, setUser, favoriteMovies}) => {

    const token = localStorage.getItem("token");
    const storedUser = JSON.parse(localStorage.getItem("user"));

    const isMovieFavorite = favoriteMovies.filter(movie => movie.id === movieData.id).length > 0;


    const addFavMovie = (movieId) => {
        if (!token) return;

        fetch (`https://spookyvibes-d90e0cfd567b.herokuapp.com/users/${storedUser.Username}/movies/${movieId}`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        }) 
        .then((response) => {
            if (response.ok) {
                alert("Movie added to favorites!");
                return response.json();
            } else {
                alert("Update failed");
            }
        })
        .then((data) => {
        console.log("DATA", data);
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
        });
    };

    const delFavMovie = (movieId) => {
        if (!token) return;

        fetch (`https://spookyvibes-d90e0cfd567b.herokuapp.com/users/${storedUser.Username}/movies/${movieId}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        }) 
        .then((response) => {
            if (response.ok) {
                alert("Movie removed from favorites!");
                return response.json();
            } else {
                alert("Update failed");
            }
        })
        .then((data) => {
        console.log("DATA", data);
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
        });
    };

    return (
        <Card className="mt-5 h-100">
            <Card.Img variant="top" src={movieData.image} rounded="true" />
            <Card.Body>
                <Card.Title>{movieData.title}</Card.Title>
                <Card.Text>{movieData.description}</Card.Text>
                <Link to={`/movies/${encodeURIComponent(movieData.id)}`}>
                    <Button className="details-button" variant="primary">
                    More Details
                    </Button>
                </Link>
                <br></br>
                {isMovieFavorite ? (
                    <Button className="mt-3" variant="outline-dark" onClick={() => delFavMovie(movieData.id)} >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                    </svg>
                        Remove from Favorites
                    </Button>
                ) : (
                    <Button className="mt-3" variant="outline-danger" onClick={() => addFavMovie(movieData.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                    </svg>
                         Add to Favorites
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
};

//Define props constraints for MovieCard
//props object must include a movie object, which requires a title, image, director, genre and description
MovieCard.propTypes = {
    movieData: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired
};