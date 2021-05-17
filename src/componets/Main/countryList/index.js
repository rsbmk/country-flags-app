import "./style.css";
import React from "react";
import Countrie from "../Countrie/index";
import { useSelector } from "react-redux";
import { URL_API } from "../../../settings/services";
import { useFetch } from "../../../settings/useFetch";
import { Link } from "wouter";

export default function CountrytList() {
  /* call the Data with useFetch */
  useFetch(URL_API);

  const countryList = useSelector((state) => {
    if (state.filterByRegion !== "" && state.countryListByName.length === 0) {
      return state.countryFilterByRegion;
    }
    if (state.countryListByName.length > 0) {
      return state.countryListByName;
    }
    return state.countryList;
  });

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
