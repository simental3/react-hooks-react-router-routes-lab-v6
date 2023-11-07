import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Card from "../components/ReusableCard";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/actors')
      .then((r) => r.json())
      .then((actorData) => setActors(actorData))
  }, [])

  const actorsList = actors.map(({name, movies}) => (
    <Card key={name} name={name} movies={movies} />
  ))

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorsList}
      </main>
    </>
  );
};

export default Actors;
