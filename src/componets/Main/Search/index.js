import React from "react";
import "./style.css";

export default function Search() {
  const handleChange = (evt) => {
    console.log(evt.target.value);
  };

  return (
    <div className="containerSearch">
      <form>
        <i className="fas fa-search" />
        <input
          onChange={handleChange}
          placeholder="Search for a country..."
          className="inputSearch"
        />
      </form>
    </div>
  );
}
