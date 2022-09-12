import React from "react";
import { Link } from "react-router-dom";

const Countries = ({ participatingCountries }) => {
  return (
    <div>
      <ul>
        {participatingCountries.map((country, i) => {
          return (
            <Link key={i} to={country}>
              <li> {country} </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Countries;
