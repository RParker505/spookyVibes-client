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
            Genre: {
                Name: "Supernatural horror",
                Description: "Supernatural horror film is a film genre that combines aspects of supernatural film and horror film. Supernatural occurrences in such films often include ghosts and demons, and many supernatural horror films have elements of religion."
            },
            Director: {
                Name: "Ari Aster",
                Bio: "Ari Aster is an American filmmaker. He became best known for writing and directing Hereditary, Midsommar, and Beau Is Afraid, all of which were released by A24.",
                Birth: "1986-01-01T00:00:00.000Z"
            },
        },
        {
            _id: "65bd85811532675fdd12af32",
            Title: "Us",
            Description: "A family's serene beach vacation turns to chaos when their doppelgangers appear and begin to terrorize them.",
            ImagePath: "https://upload.wikimedia.org/wikipedia/en/0/00/Us_%282019%29_theatrical_poster.png",
            Featured: false,
            Genre: {
                Name: "Psychological horror",
                Description: "Psychological horror is a subgenre of horror and psychological fiction with a particular focus on mental, emotional, and psychological states to frighten, disturb, or unsettle its audience."
            },
            Director: {
                Name: "Jordan Peele",
                Bio: "Jordan Haworth Peele is an American actor, comedian, and filmmaker. He is known for his film and television work in the comedy and horror genres. Peele started his career in sketch comedy before transitioning his career to a writer and director of psychological horror and satirical films.",
                Birth: "1979-01-01T00:00:00.000Z"
            }
        },
        {
            _id: "65bd82bb1532675fdd12af2e",
            Title: "Bodies Bodies Bodies",
            Description: "When a group of rich 20-somethings plan a hurricane party at a remote family mansion, a party game turns deadly in this fresh and funny look at backstabbing, fake friends, and one party gone very, very wrong.",
            ImagePath: "https://m.media-amazon.com/images/M/MV5BYTA2ODg5ZjgtOTU2My00MzFkLWI0NzMtZmQ5MmRhMWU1NzhlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg",
            Featured: false,
            Genre: {
                Name: "Horror comedy",
                Description: "The horror comedy subgenre is a crossover between the two genres that often utilizes dark or gallows humor and parody. It has been described as able to be categorized under three types: black comedy, parody and spoof."
            },
            Director: {
                Name: "Halina Reijn",
                Bio: "Halina Reijn is a renowned director, actress, author and producer. She is the winner of multiple awards, including the Dutch film Award, the Golden Calf for Best Actress , the Dutch theater awards Theo D'Or and Colombina, as well as the Courbois pearl, an oeuvre award which honours an actress who has made an indelible impression, both on stage as in film and television.",
                Birth: "1975-01-01T00:00:00.000Z"
            }
        }
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