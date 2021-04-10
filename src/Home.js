import React, { Component } from "react";
import DateTime from "./home_components/DateTime";
import Weather from "./home_components/Weather";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="weather">
          <Weather />
        </div>
        <div className="dateTime">
          <DateTime />
        </div>
        <br />
        <p className="about">
          These webpages were made with ReactJS and styled with CSS and
          MaterialUI.
        </p>
      </div>
    );
  }
}

export default Home;
