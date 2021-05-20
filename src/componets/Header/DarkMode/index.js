import React from "react";
import "./style.css";
export default function DarkMode() {
  const handleDarkMode = (evt) => {
    document.body.classList.toggle("isDarkMode");
  };
  return (
    <div onClick={handleDarkMode} className="containerDarkMode">
      <i className="far fa-moon" />
      Dark Mode
    </div>
  );
}
