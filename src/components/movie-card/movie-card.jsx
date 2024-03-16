import PropTypes from "prop-types";
import {Button, Card} from "react-bootstrap";
import "./movie-card.scss";

export const MovieCard = ({movieData, onMovieClick}) => {
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={movieData.image} rounded />
            <Card.Body>
                <Card.Title>{movieData.title}</Card.Title>
                <Card.Text>{movieData.description}</Card.Text>
                <Button onClick={() => onMovieClick(movieData)} className="details-button" variant="primary">
                More Details
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
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired,//must include onMovieClick and it must be a function
};