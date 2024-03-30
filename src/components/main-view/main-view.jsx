import {useState, useEffect} from "react";
import {MovieCard} from "../movie-card/movie-card"; //component to display single movie title
import {MovieView} from "../movie-view/movie-view"; //component to display all details for a movie
import {LoginView} from "../login-view/login-view"; //component to display login form
import {SignupView} from "../signup-view/signup-view"; //component to display signup form
import {NavigationBar} from "../navigation-bar/navigation-bar"; //component to display navbar
import {ProfileView} from "../profile-view/profile-view"; //component to display user details
import {AccountView} from "../account-view/account-view"; //test component for user details
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";


//export MainView component to make it avl for use in other components, modules
export const MainView = () => {
    //keep user logged in as long as user and token are in localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");

    const [movies, setMovies] = useState([]);
    const [user, setUser] = useState(storedUser? storedUser: null); //if user is logged in, biz as usual; if not, display LoginView
    const [token, setToken] = useState(storedToken? storedToken: null);//on page refresh, user and token are initialized with whatever is in localStorage. If empty, both are null.

    const onLoggedIn = (user, token) => {
        setUser(user);
        setToken(token);
      };
    
    const onLoggedOut = () => {
        setUser(null);
        setToken(null); 
        localStorage.clear();
    };

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

    //one return statement in one row. Nested elements are conditionally rendered using ternary operator ?:
    return (
        <BrowserRouter>
            <NavigationBar
                user={user}
                onLoggedOut={onLoggedOut}
            />
            <Row className="justify-content-md-center">
                <Routes>
                    <Route
                        path="/signup"
                        element={
                            <>
                                {user ? (
                                    <Navigate to="/" />
                                ) : (
                                    <Col md={5}>
                                        <SignupView />
                                    </Col>
                                )}
                            </>
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <>
                                {user ? (
                                    <Navigate to="/" />
                                ) : (
                                    <Col md={5}>
                                        <LoginView onLoggedIn={onLoggedIn} />
                                    </Col>
                                )}
                            </>
                        }
                    />
                    <Route
                        path="/movies/:movieId"
                        element={
                            <>
                                {!user ? (
                                    <Navigate to="/login" replace />
                                ) : movies.length === 0 ? (
                                    <Col>The list is empty!</Col>
                                ) : (
                                    <Col md={8}>
                                        <MovieView movies={movies} />
                                    </Col>
                                )}
                            </>
                        }
                    />
                    <Route
                        path="/"
                        element={
                            <>
                                {!user ? (
                                    <Navigate to="/login" replace />
                                ) : movies.length === 0 ? (
                                    <Col>The list is empty!</Col>
                                ) : (
                                    <>
                                    {movies.map((movie) => (
                                        <Col className="mb-5" key={movie.id} xs={12} sm={6} md={4} lg={3}>
                                            <MovieCard movieData={movie} setUser={setUser} />
                                        </Col>
                                    ))}
                                    </>
                                )}
                            </>
                        }
                    />
                    <Route
                        path="/profile"
                        element={
                            <>
                                {!user ? (
                                    <Navigate to="/account" replace />
                                ) : (
                                    <Col md={6}>
                                        <AccountView 
                                            user={user}
                                            token={token}
                                            movies={movies}
                                            setUser={setUser}
                                            onLoggedOut={onLoggedOut}
                                        />
                                    </Col>
                                )}
                            </>
                        }
                    />
                </Routes>
            </Row>
        </BrowserRouter>
    );
};