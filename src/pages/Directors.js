import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Card from "../components/ReusableCard";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/directors')
      .then((r) => r.json())
      .then((directorData) => setDirectors(directorData))
  }, [])

  const directorList = directors.map(({ id, name, movies }) => <Card key={id} name={name} movies={movies} />)

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Directors Page</h1>
        {directorList}
      </main>
    </>
  );
};

export default Directors;
