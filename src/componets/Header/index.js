import React from "react";
import DarkMode from "./DarkMode";
import "./styles.css";

export default function Header() {
  return (
    <div className="containerHeader">
      <h1 className="title">Where in the world?</h1>
      <DarkMode />
    </div>
  );
}
