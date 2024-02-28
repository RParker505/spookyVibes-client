import {useState} from "react";
import {MovieCard} from "../movie-card/movie-card"; //component to display single movie title
import {MovieView} from "../movie-view/movie-view"; //component to display all details for a movie

//export MainView component to make it avl for use in other components, modules
export const MainView = () => {
    const [movies, setMovies] = useState([
        {
            _id: "65bd7f731532675fdd12af2b",
            Title: "Hereditary",
            Description: "Members of a grieving family each begin to have disturbing, otherworldly experiences linked to the sinister secrets and emotional trauma that have been passed through the generations of their family.",
            ImagePath: "https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_.jpg",
            Featured: false,
            Genre: "Supernatural horror",
            Director: "Ari Aster"
        },
        {
            _id: "65bd85811532675fdd12af32",
            Title: "Us",
            Description: "A family's serene beach vacation turns to chaos when their doppelgangers appear and begin to terrorize them.",
            ImagePath: "https://upload.wikimedia.org/wikipedia/en/0/00/Us_%282019%29_theatrical_poster.png",
            Featured: false,
            Genre: "Psychological horror",
            Director: "Jordan Peele"
        },
        {
            _id: "65bd82bb1532675fdd12af2e",
            Title: "Bodies Bodies Bodies",
            Description: "When a group of rich 20-somethings plan a hurricane party at a remote family mansion, a party game turns deadly in this fresh and funny look at backstabbing, fake friends, and one party gone very, very wrong.",
            ImagePath: "https://m.media-amazon.com/images/M/MV5BYTA2ODg5ZjgtOTU2My00MzFkLWI0NzMtZmQ5MmRhMWU1NzhlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg",
            Featured: false,
            Genre: "Horror comedy",
            Director: "Halina Reijn"
        },
    ]);

    const [selectedMovie, setSelectedMovie] = useState(null); //initial state will be null so movie details will not be visible

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
                        movieData={movie}//pass movie object from each map iteration to MovieCard component
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