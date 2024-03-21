import React from "react";
import PropTypes from "prop-types";
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";
import "./movie-card.scss";

export const MovieCard = ({movieData}) => {
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={movieData.image} rounded />
            <Card.Body>
                <Card.Title>{movieData.title}</Card.Title>
                <Card.Text>{movieData.description}</Card.Text>
                <Link to={`/movies/${encodeURIComponent(moviedData.id)}`}>
                    <Button className="details-button" variant="primary">
                    More Details
                    </Button>
                </Link>
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