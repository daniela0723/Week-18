import React, { Component } from "react";
import "../App.css";

class Card extends Component {
  constructor(props) {
    super(props);
    //Add 'stacked' effect to deck by randomizing position in Deck-cardarea
    let angle = Math.random() * 90 - 45;
    let xPos = Math.random() * 40 - 20;
    let yPos = Math.random() * 40 - 20;
    this._transform = `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
  }
  render() {
    return (
      <img
        className="Card"
        style={{ transform: this._transform }}
        src={this.props.image}
        alt={this.props.name}
      />
    );
  }
}
export default Card;
