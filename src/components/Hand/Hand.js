import React from 'react';
import './Hand.css';

const Hand = ({ className, cards, remaining }) => {
    return (
        <div className={className}>
            {remaining === 0 ? <div>There are no more cards remaining.</div> : cards.map((card, index) => (
                <img src={card.image} key={index} alt={card.image} />
            ))}
            <p className="cardsRemaining">Cards Remaining: {remaining}</p>
        </div>
    );
}

export default Hand;
