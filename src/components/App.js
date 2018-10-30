import React from "react";
import "./App.css";
import { fetchDeck } from '../api/api';
import Hand from './Hand/Hand';

class App extends React.Component {
  constructor(props) {
    super(props);
    // used to prevent calling setState when the component unmounts
    this._hasData = false;
    this.state = {
      deck: [],
      hasData: false,
    }
  }

  componentDidMount() {
    fetchDeck('new', 5).then(hand => {
      this.getCards(hand);
    });
  }

  componentWillUnmount() {
    this._hasData = false;
  }

  getCards = result => {
    this._hasData = true;
    if (this._hasData) {
      this.setState({
        deck: result,
        hasData: true,
      });
    }
  };

  getMoreCards = () => {
    const { deck_id } = this.state.deck;
    fetchDeck(deck_id, 5).then(hand => {
      this.getCards(hand);
    });
  }
  render() {
    const { cards, deck_id, remaining } = this.state.deck;
    const { hasData } = this.state;
    return (
      <div className="appContainer">
        <h2 className="deckHeader">Deck of Cards</h2>
        {hasData && (
          <Hand 
            className="handContainer"
            cards={cards}
            deckId={deck_id}
            remaining={remaining}
            hasData={hasData} />)}
        <button onClick={this.getMoreCards} className="deckButton">New Hand</button>
      </div>
    )
  }
}

export default App;