import React from "react";

export default function Filter() {
  const handleChangeRegion = (evt) => {};
  return (
    <select onChange={handleChangeRegion}>
      <option value="">Filter by region</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Africa">Africa</option>
      <option value="Oceania">Oceania</option>
      <option value="Europa">Europa</option>
    </select>
  );
}
