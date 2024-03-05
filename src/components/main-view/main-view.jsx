import {useState, useEffect} from "react";
import {MovieCard} from "../movie-card/movie-card"; //component to display single movie title
import {MovieView} from "../movie-view/movie-view"; //component to display all details for a movie

//export MainView component to make it avl for use in other components, modules
export const MainView = () => {
    const [movies, setMovies] = useState([]);

    const [selectedMovie, setSelectedMovie] = useState(null); //initial state will be null so movie details will not be visible

    useEffect (() => {
        fetch("https://spookyvibes-d90e0cfd567b.herokuapp.com/movies")
            .then((response) => response.json())
            .then((data) => {
                const moviesFromApi = data.docs.map((movie) => {
                    return {
                        id: movie._id,
                        title: movie.Title,
                        image: movie.ImagePath,
                        description: movie.Description,
                        director: movie.Director.Name,
                        genre: movie.Genre.Name
                    };
                });
                setMovies(moviesFromApi);
            });
    }, []);

    if (selectedMovie) {
        return (
            <MovieView
                movieData={selectedMovie}
                onBackClick={() => setSelectedMovie(null)}
            />
        );
    }

    if (movies.length === 0) {
        return <div>The list is empty!</div>;
    } else {
        return (
           <div>
            {movies.map((movie) => {
                return (
                    <MovieCard
                        key={movie._id}
                        movieData={movie}//pass movie object from each map iteration to MovieCard component in the movieData prop
                        onMovieClick={(newSelectedMovie) => {
                            setSelectedMovie(newSelectedMovie);
                        }}
                    />
                );
            })}
           </div> 
        );
    }
}