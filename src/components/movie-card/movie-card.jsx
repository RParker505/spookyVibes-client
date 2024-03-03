import PropTypes from "prop-types";

export const MovieCard = ({movieData, onMovieClick}) => {
    return (
        <div
            onClick={() => {
                onMovieClick(movieData);
            }}
        >
            {movieData.Title}
        </div>
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