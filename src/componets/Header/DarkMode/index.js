import React from "react";
import "./style.css";

export default function DarkMode() {
  const { matches } = window.matchMedia("(prefers-color-scheme: dark)");

  if (matches) {
    document.body.classList.add("isDarkMode");
  }

  const handleDarkMode = () => {
    document.body.classList.toggle("isDarkMode");
  };
  return (
    <div onClick={handleDarkMode} className="containerDarkMode">
      <i className="far fa-moon" />
      Dark Mode
    </div>
  );
}
