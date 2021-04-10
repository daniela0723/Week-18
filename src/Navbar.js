import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <p>Single-Page App with React</p>
        <NavLink exact activeClassName="Navbar-active" to="/">
          Home
        </NavLink>
        <NavLink exact activeClassName="Navbar-active" to="/todos">
          ToDos
        </NavLink>
        <NavLink exact activeClassName="Navbar-active" to="/cards">
          Cards
        </NavLink>
      </div>
    );
  }
}
