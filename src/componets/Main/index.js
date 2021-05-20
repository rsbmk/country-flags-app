import React from "react";
import "../../App.css";
import CountrytList from "./countryList";
import Search from "./Search";
import Filter from "./Filter";

export default function Main() {
  return (
    <main className="wrapMain">
      <div className="wrapSearchFilter">
        <Search />
        <Filter />
      </div>
      <CountrytList />
    </main>
  );
}
