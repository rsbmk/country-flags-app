import React from "react";
import "./styles.css";

export default function Countrie({ flag, name, population, region, capital }) {
  return (
    <>
      <div className="cardCountry">
        <img loading="lazy" alt="flag" className="flag" src={flag} />
        <div className="infoCountry">
          <p className="countryName">{name}</p>
          <p className="population">
            <strong>Population: </strong>
            {population}
          </p>
          <p className="region">
            <strong>Region: </strong>
            {region}
          </p>
          <p className="capital">
            <strong>Capital: </strong>
            {capital}
          </p>
        </div>
      </div>
    </>
  );
}
