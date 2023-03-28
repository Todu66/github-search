import React from "react";
import "./Header.css";
class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header">
          <h2>devfinder</h2>
          <p>light</p>
        </div>
        <div className="input-container">

        <input placeholder="Search GitHub username…" />
        <button type="button">Search</button>
        </div>
        <h1>werwer</h1>
      </header>
    );
  }
}

export default Header;
