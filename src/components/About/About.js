import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="cardsAbout">
            <h2 className="cardsHeader">Motivation</h2>
                <img src="https://deckofcardsapi.com/static/img/AH.png" alt="ace of hearts"  className="heartCard" />
                <p className="cardDescription">
                This small application uses React to build a user interface that uses the Deck Of Cards API to display a hand of 5 cards.
                The intention of this application is to practice handling REST/AJAX calls using JavaScript fetch. 
                How to handle not calling setState on an unmounted component using React's lifecycle hooks. Using React Router to render the different components responsible for displaying the deck of cards and the about page.
                </p>
        </div>
    );
};

export default About;