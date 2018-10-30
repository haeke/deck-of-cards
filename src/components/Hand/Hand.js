import React from 'react';
import './Hand.css';

const Hand = ({ className, cards, remaining }) => {
    return (
        <React.Fragment>
            <div className={className}>
                {remaining === 0 ? <div>There are no more cards remaining.</div> : cards.map((card, index) => (
                    <img src={card.image} key={index} alt={card.image} />
                ))}
            </div>
            <div>
                <p className="cardsRemaining">Cards Remaining: {remaining}</p>
            </div>
        </React.Fragment>
    );
}

export default Hand;
