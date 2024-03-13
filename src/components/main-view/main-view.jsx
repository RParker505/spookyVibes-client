import {useState, useEffect} from "react";
import {MovieCard} from "../movie-card/movie-card"; //component to display single movie title
import {MovieView} from "../movie-view/movie-view"; //component to display all details for a movie
import {LoginView} from "../login-view/login-view"; //component to display login form
import {SignupView} from "../signup-view/signup-view"; //component to display signup form


//export MainView component to make it avl for use in other components, modules
export const MainView = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");

    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null); //initial state will be null so movie details will not be visible
    const [user, setUser] = useState(storedUser? storedUser: null); //if user is logged in, biz as usual; if not, display LoginView
    const [token, setToken] = useState(storedToken? storedToken: null);//on page refresh, user and token are initialized with whatever is in localStorage. If empty, both are null.

    useEffect (() => {
        if (!token) {
            return;
        }//no fetch done if there is no token (no user logged in)

        fetch("https://spookyvibes-d90e0cfd567b.herokuapp.com/movies", {
            headers: {Authorization: `Bearer ${token}`}
        })
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
    }, [token]);//token as dependency array will fetch every time token changes (i.e. after a user logs in)

    if (!user) {
        return (
            <>
            <LoginView
                onLoggedIn={(user, token) => {
                    setUser(user);
                    setToken(token);
                }} //store token and user as state variables, pass onLoggedIn prop to LoginView
            />
            or
            <SignupView />
            </>
        );
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
                    setToken(null);
                    localStorage.clear();
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