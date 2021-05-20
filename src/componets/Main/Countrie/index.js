import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "wouter";
import "./styles.css";

export default function Countrie({ flag, name, population, region, capital }) {
  const [location, setLocation] = useLocation();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: "GET_A_COUNTRY_BY_NAME",
      payload: name,
    });
    setLocation(`/country/${name.replace(/\s+/g, "")}`);
  };
  return (
    <>
      <div onClick={handleClick} className="cardCountry">
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
