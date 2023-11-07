import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState({})
  const params = useParams();
  const movieId = params.id
  
  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
      .then((r) => r.json())
      .then((data) => setMovie(data))
  }, [movieId])

  if (!movie.title) {
    return <h1>Loading!</h1>;
  }

  const genres = movie.genres.map(genre => <span key={genre}>{genre}</span>)
  
  // console.log(genres.map((genre) => console.log(genre)))

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Title: {movie.title}</h1>
        <p>Run-time: {movie.time}</p>
        Genres: {genres}
      </main>
    </>
  );
};

export default Movie;
