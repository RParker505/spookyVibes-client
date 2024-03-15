import PropTypes from "prop-types";
import {Button, Card} from "react-bootstrap";

export const MovieCard = ({movieData, onMovieClick}) => {
    return (
        <Card>
            <Card.Img variant="top" scr={movieData.image} />
            <Card.Body>
                <Card.Title>{movieData.title}</Card.Title>
                <Card.Text>{movieData.description}</Card.Text>
                <Button onClick={() => onMovieClick(movieData)} variant="link">
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