import React from "react";
import "./App.css";
import { fetchDeck } from '../api/api';
import Hand from './Hand/Hand';
import ButtonGroup from './ButtonGroup/ButtonGroup';
import Nav from './Nav/Nav';

const listObject = [
  { name: 'About ' },
];

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

  getNewDeck = () => {
    fetchDeck('new', 5).then(hand => {
      this.getCards(hand);
    });
  }
  render() {
    const { cards, deck_id, remaining } = this.state.deck;
    const { hasData } = this.state;
    return (
      <div className="appContainer">
          <Nav 
            className="navContainer" navHeaderClass="deckHeader" headerText="Deck of Cards" unorderedClass="unorderedList" listObject={listObject} />
          {hasData && (
            <Hand 
              className="handContainer"
              cards={cards}
              deckId={deck_id}
              remaining={remaining}
              hasData={hasData} />)}
        <ButtonGroup className="buttonGroup" getMoreCards={this.getMoreCards} getNewDeck={this.getNewDeck} />
      </div>
    )
  }
}

export default App;