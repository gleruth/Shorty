import React, { Component } from "react";
import ShortForm from "./shorts/ShortForm";
import ShortList from "./shorts/ShortList";
import "./Landing.css";

class Landing extends Component {
  render() {
    return (
      <div className="Landing-main-div">
        <ShortForm />
        <ShortList />
      </div>
    );
  }
}

export default Landing;
