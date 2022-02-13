import React from "react";
import img from "../logo512.png";
import "../style.css";

export default function Header() {
  return (
    <header className="header">
      <img src={img} className="header--img" />
      <h2 className="header--title">Meme Generator</h2>
      <p className="header--project"> React Course-Project 3</p>
    </header>
  );
}
