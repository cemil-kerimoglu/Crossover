import axios from "axios";
import { useState, useEffect } from "react";
function Player(props) {
  const [info, setInfo] = useState({});

  useEffect(() => {
    axios
      .get(`https://crossover2backend.onrender.com/${props.player}`)
      .then((response) => {
        console.log(response.data);
        setInfo(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return <p>{props.player}</p>;
}
export default Player;
