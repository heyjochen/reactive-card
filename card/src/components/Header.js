import React from "react";
import logo from "../assets/sun-logo.svg";
console.log(logo);

export default function Header(props) {
  return (
    <header className="header">
      <img src={logo} className="header__img" />
      <a href="">been there - done that</a>
    </header>
  );
}
