import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

const ButtonGroup = ({ className, getMoreCards, getNewDeck }) => {
    return (
        <div className={className}>
            <Button handleClick={getMoreCards} className="deckButton" type="button">New Hand</Button>
            <Button handleClick={getNewDeck} className="deckButton" type="button">New Deck</Button>
        </div>
    );
}

ButtonGroup.propTypes = {
    className: PropTypes.string,
    getMoreCards: PropTypes.func,
    getNewDeck: PropTypes.func,
}

ButtonGroup.defaultProps = {
    className: '',
    getMoreCards: undefined,
    getNewDeck: undefined,
};

export default ButtonGroup;
