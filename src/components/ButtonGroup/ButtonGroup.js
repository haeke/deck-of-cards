import React from 'react';
import Button from './Button';

const ButtonGroup = ({ className, getMoreCards, getNewDeck }) => {
    return (
        <div className={className}>
            <Button handleClick={getMoreCards} className="deckButton" type="button">New Hand</Button>
            <Button handleClick={getNewDeck} className="deckButton" type="button">New Deck</Button>
        </div>
    );
}

export default ButtonGroup;
