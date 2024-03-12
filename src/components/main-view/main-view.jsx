import {useState, useEffect} from "react";
import {MovieCard} from "../movie-card/movie-card"; //component to display single movie title
import {MovieView} from "../movie-view/movie-view"; //component to display all details for a movie
import {LoginView} from "../login-view/login-view"; //component to display login form


//export MainView component to make it avl for use in other components, modules
export const MainView = () => {
    const [movies, setMovies] = useState([]);

    const [selectedMovie, setSelectedMovie] = useState(null); //initial state will be null so movie details will not be visible

    const [user, setUser] = useState(null); //if user is logged in, biz as usual; if not, display LoginView

    useEffect (() => {
        fetch("https://spookyvibes-d90e0cfd567b.herokuapp.com/movies")
            .then((response) => response.json())
            .then((data) => {
                const moviesFromApi = data.map((movie) => {
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

    if (!user) {
        return <LoginView onLoggedIn={(user) => setUser(user)} /> //pass onLoggedIn prop to LoginView
    }

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
            <button
                onClick={() => {
                    setUser(null);
                }}
            >
                Logout
            </button>
            {movies.map((movie) => {
                return (
                    <MovieCard
                        key={movie.id}
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