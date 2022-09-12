import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Country from "./components/Country";
function App() {
  const [countries, setCountries] = useState();

  /*test*/
  useEffect(() => {
    axios
      .get("https://crossover2backend.onrender.com/")
      .then((response) => {
        console.log(response.data);
        setCountries(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      {countries &&
        countries.map((country) => {
          return <Country country={country} />;
        })}
    </div>
  );
}

export default App;
