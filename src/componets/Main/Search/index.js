import React from "react";
import { useDispatch } from "react-redux";

import "./style.css";

export default function Search() {
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    dispatch({
      type: "FILTER_BY_NAME",
      payload: evt.target.value,
    });
  };

  return (
    <label className="containerSearch">
      <i className="fas fa-search" />
      <input
        onChange={handleChange}
        placeholder="Search for a country..."
        className="inputSearch"
      />
    </label>
  );
}
