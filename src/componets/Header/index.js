import React from "react";
import DarkMode from "./DarkMode";
import "./styles.css";
import { useLocation } from "wouter";

export default function Header() {
  const [location, setLocation] = useLocation();

  return (
    <div className="containerHeader">
      <h1 onClick={() => setLocation("/")} className="title">
        Where in the world?
      </h1>
      <DarkMode />
    </div>
  );
}
