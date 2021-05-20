import React from "react";
import { useLocation } from "wouter";
import "./styles.css";

export default function Countrie({
  flag,
  name,
  population,
  region,
  capital,
  area,
}) {
  const [location, setLocation] = useLocation();
  return (
    <>
      <div
        onClick={() => setLocation(`/country/${name.replace(/\s+/g, "")}`)}
        className="cardCountry"
      >
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
