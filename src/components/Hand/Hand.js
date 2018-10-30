import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-spring';
import './Hand.css';

const Hand = ({ className, cards, remaining }) => {
    return (
        <React.Fragment>
            <div className={className}>
                {remaining === 0 ? <div>There are no more cards remaining.</div> : (
                    <Transition
                        items={cards} keys={card => card.image}
                        from={{ opacity: 0 }}
                        enter={{ opacity: 1 }}
                        leave={{ position: 'absolute', opacity: 0 }}>
                        {card => props => <div style={props}><img src={card.image} alt={card.image} /></div>}
                        </Transition>
                )}
            </div>
            <div>
                <p className="cardsRemaining">Cards Remaining: {remaining}</p>
            </div>
        </React.Fragment>
    );
}

Hand.propTypes = {
    className: PropTypes.string,
    cards: PropTypes.array,
    remaining: PropTypes.number,
}

Hand.defaultProps = {
    className: '',
    cards: [],
    remaining: 0,
}

export default Hand;
