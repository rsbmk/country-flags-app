import React, { useContext } from "react";
import Countrie from "../Countrie/index";
import StaticContext from "../../../Context/StaticContext";
import "./style.css";

export default function CountrytList() {
  /* consumimos los datos de la api desde el Context */
  const { country, setCountry } = useContext(StaticContext);

  return (
    <div className="container">
      {country.map(({ flag, name, population, region, capital }) => {
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
