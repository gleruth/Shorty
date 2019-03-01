import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <div className="left brand-logo Header-brand-logo">Shorty App</div>
        </div>
      </nav>
    );
  }
}

export default Header;
