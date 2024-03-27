import React from "react";
import PropTypes from "prop-types";
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./movie-card.scss";

export const MovieCard = ({movieData}) => {
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
                <Button className="mt-3" variant="outline-danger">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg>
                     Add to Favorites
                </Button>
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