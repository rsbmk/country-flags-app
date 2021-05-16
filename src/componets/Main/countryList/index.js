import React, { useEffect } from "react";
import Countrie from "../Countrie/index";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";

export default function CountrytList() {
  const dispatch = useDispatch();

  /* const countryListByName = useSelector((state) => state.countryListByName); */

  const countryList = useSelector((state) => {
    if (state.filterByRegion !== "") {
      return state.countryFilterByRegion;
    }
    if (state.countryListByName.length > 0) {
      return state.countryListByName;
    }
    return state.countryList;
  });

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "SET_COUNTRY_LIST",
          payload: data,
        });
      });
  }, []);

  return (
    <div className="container">
      {countryList.map(({ flag, name, population, region, capital }) => {
        return (
          <Countrie
            key={name}
            flag={flag}
            name={name}
            population={population}
            region={region}
            capital={capital}
          />
        );
      })}
    </div>
  );
}
