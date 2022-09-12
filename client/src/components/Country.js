import react, { useState, useEffect } from "react";
import axios from "axios";
import Player from "./Player";
import { Link } from "react-router-dom";

function Country(props) {
  const [players, setPlayers] = useState();

  useEffect(() => {
    axios
      .get(`https://crossover2backend.onrender.com/${props.country}`)
      .then((response) => {
        console.log(response.data);
        setPlayers(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>{props.country}</h1>
      {players &&
        players.map((player) => {
          return <Link>{/*<Player player={player} />*/}</Link>;
        })}
    </>
  );
}

export default Country;
