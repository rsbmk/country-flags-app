import React from "react";
import "./style.css";
export default function Search() {
  return (
    <div className="containerSearch">
      <form>
        <i className="fas fa-search" />
        <input placeholder="Search for a country..." className="inputSearch" />
      </form>
    </div>
  );
}
