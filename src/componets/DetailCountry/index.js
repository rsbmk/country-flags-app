import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import { useLocation } from "wouter";

export default function DetailCountry() {
  /*  const dispatch = useDispatch();
  const countryName = params.name; 

   dispatch({
    type: "GET_A_COUNTRY_BY_NAME",
    payload: countryName,
  }); */
  const [dataCountry] = useSelector((state) => state.getCountryByName);

  const [location, setLocation] = useLocation();

  const handleClick = () => {
    setLocation("/country-flags-app/");
  };

  const bordersCountry =
    dataCountry.borders.length > 0 ? (
      dataCountry.borders.map((border) => (
        <span key={border} className="border">
          {border}
        </span>
      ))
    ) : (
      <span className="border">No Borders</span>
    );
  return (
    <div className="wrapDetailPage">
      <div className="containerCountryDetail">
        <div className="wrapButtonBack">
          <div onClick={handleClick} className="bottonBack">
            <i className="fas fa-arrow-left"></i>
            Back
          </div>
        </div>
        <div className="containertCountryInfo">
          <img
            className="flagDetailCountry"
            src={dataCountry.flag}
            alt="flag"
          />
          <div className="countryInfo">
            <h2 className="countryName">{dataCountry.name} </h2>
            <div className="wrapInfo">
              <div className="containerInfoCountry">
                <p>
                  <span>Native Name: </span>
                  {dataCountry.nativeName}
                </p>
                <p>
                  <span>Population: </span>
                  {dataCountry.population}
                </p>
                <p>
                  <span>Region: </span>
                  {dataCountry.region}
                </p>
                <p>
                  <span>Sub Region: </span>
                  {dataCountry.subregion}
                </p>
                <p>
                  <span>Capital: </span>
                  {dataCountry.capital}
                </p>
              </div>
              <div className="containerInfoCountry">
                <p>
                  <span>Top Level Domain: </span>
                  {dataCountry.topLevelDomain[0]}
                </p>
                <p>
                  <span>Currencies: </span>
                  {dataCountry.currencies[0].name}
                </p>
                <p>
                  <span>Languages: </span>
                  {dataCountry.languages.map((language) => `${language.name} `)}
                </p>
              </div>
            </div>
            <div className="wrapBorderCountries">
              <h3 className="titleBorderCountries">Border Countries:</h3>
              <div className="wrapCardBorders">{bordersCountry}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
