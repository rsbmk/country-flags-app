import React, { useContext } from "react";
import Countrie from "../Countrie/index.js";
import StaticContext from "../../Context/StaticContext";
import "./style.css";

export default function CountrytList() {
  /* consumimos los datos de la api desde el Context */
  const { countryList } = useContext(StaticContext);

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
