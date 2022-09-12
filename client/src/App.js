import "./App.css";
// import axios from "axios";
import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Country from "./components/Country";
import Countries from "./components/Countries";

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const results = await fetch("https://crossover2backend.onrender.com");
      const res = await results.json();
      console.log(res);
      setCountries(res);
    };
    fetchCountries();
  }, []);

  /*
  useEffect(() => {
    axios
      .get("https://crossover2backend.onrender.com/")
      .then((response) => {
        console.log(response.data);
        setCountries(response.data);
      })
      .catch((err) => console.log(err));
  }, []);
  */

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Countries participatingCountries={countries} />}
        />
        {/*<Route path=":country" element={<Country />} /> */}
        {/*<Route path=":country/:player" element={<Player />} /> */}
      </Routes>
    </div>
  );
};

/*
    <div className="App">
  
      {countries.map((country, i) => {
          return (
            <Link key={i} to={`/${country}`}>
              {country}
            </Link>
          ) 
        <Route path=":country" element={<Country country={countries} />} />
      

      /*countries &&
        countries.map((country) => {
          return <Country country={country} />;
        })
        
    */

export default App;
