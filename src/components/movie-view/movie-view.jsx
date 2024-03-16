import PropTypes from "prop-types";

export const MovieView = ({movieData, onBackClick}) => {
    return (
        <div>
            <div>
                <img height={500} alt={`${movieData.title} poster`} src={movieData.image} />
            </div>
            <div>
                <span>Title: </span>
                <span>{movieData.title}</span>
            </div>
            <div>
                <span>Description: </span>
                <span>{movieData.description}</span>
            </div>
            <div>
                <span>Director: </span>
                <span>{movieData.director}</span>
            </div>
            <div>
                <span>Genre: </span>
                <span>{movieData.genre}</span>
            </div>
            <button onClick={onBackClick}>Back</button>
        </div>
    );
};

//Define props constraints for MovieView
//props object must include a movie object, which requires a title, image, director, genre and description
MovieView.propTypes = {
    movieData: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired,
    onBackClick: PropTypes.func.isRequired,//must include onBackClick and it must be a function
};