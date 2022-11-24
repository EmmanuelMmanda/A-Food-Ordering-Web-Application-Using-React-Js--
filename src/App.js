import "./App.css";
import React, { useState, useEffect } from "react";
import MoviesList from "./components/MoviesList";
import Spinner from "./components/UI/Spinner/Spinner";
import AddMovie from "./components/AddMovie";
function App() {
  // const fetchMoviesHandler = () => {
  //   fetch("https://swapi.dev/api/films/")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const resMovies = data.results;
  //       const transformedMovies = resMovies.map((movie) => {
  //         return {
  //           id: movie.episode_id,
  //           title: movie.title,
  //           release: movie.release_date,
  //           openingText: movie.opening_crawl,
  //         };
  //       });

  //       setMovies(transformedMovies);
  //     });
  // };

  const [Movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState();

  const fetchMoviesHandler = async () => {
    setisLoading(true);
    seterror(null);
    try {
      const response = await fetch(
        "https://hourlycodes-default-rtdb.firebaseio.com/movies.json"
      );

      if (!response.ok) {
        setisLoading(false);
        throw new Error(response.statusText);
      }
      const Movies = await response.json();

      let loadedMovies = [];

      for (const key in Movies) {
        loadedMovies.push({
          id: key,
          title: Movies[key].title,
          release: Movies[key].releaseDate,
          openingText: Movies[key].openingText,
        });
      }

      setMovies(loadedMovies);

      setisLoading(false);
    } catch (err) {
      seterror(err.message);
    }
  };

  useEffect(() => {
    fetchMoviesHandler();
    return () => {};
  }, []);

  const addMovieHandler = async (movie) => {
    const response = await fetch(
      "https://hourlycodes-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Response is:", response);
  };

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>
          {isLoading && !error ? <Spinner /> : "Fetch Movies"}
        </button>
      </section>
      <section>
        {!isLoading && !error && <MoviesList movies={Movies} />}
        {isLoading && !error && <p>Loading...</p>}
        {error && ` ${error}`}
      </section>
    </React.Fragment>
  );
}

export default App;
