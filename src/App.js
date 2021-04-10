import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import ToDos from "./ToDos";
import Cards from "./Cards";
import Navbar from "./Navbar";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/todos" component={ToDos} />
            <Route exact path="/cards" component={Cards} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
