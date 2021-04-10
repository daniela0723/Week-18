import React, { Component } from "react";
import axios from "axios";
import Card from "./Card";
import logo from "../images/react-logo.png";

// API URL for deckofcards api
const API_BASE_URL = "https://deckofcardsapi.com/api/deck";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: null,
      drawn: [],
    };
    this.getCard = this.getCard.bind(this);
  }
  async componentDidMount() {
    let deck = await axios.get(`${API_BASE_URL}/new/shuffle/?deck_count=1`);
    this.setState({ deck: deck.data });
  }
  async getCard() {
    let cardUrl = `${API_BASE_URL}/${this.state.deck.deck_id}/draw/?count=1`;
    try {
      let cardRes = await axios.get(cardUrl);
      if (!cardRes.data.success) {
        throw new Error("no card remaining");
      }
      let card = cardRes.data.cards[0];
      console.log(cardRes.data);

      this.setState((st) => ({
        drawn: [
          ...st.drawn,
          {
            id: card.code,
            image: card.image,
            name: `${card.value} of ${card.suit}`,
          },
        ],
      }));
    } catch (err) {
      alert(err);
    }
  }
  render() {
    const cards = this.state.drawn.map((c) => (
      <Card key={c.id} name={c.name} image={c.image} />
    ));
    return (
      <div className="Deck">
        <h1 className="Deck-title">React Card Dealer</h1>
        <img className="logo" src={logo} alt="React logo" />
        <br />
        <button className="Deck-btn" onClick={this.getCard}>
          Get A Card!
        </button>
        <br />
        <div className="Deck-cardstack">{cards}</div>
      </div>
    );
  }
}

export default Deck;
