import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as routes from '../../constants/routes';
import Nav from '../Nav/Nav';
import DeckContainer from '../DeckContainer/DeckContainer';
import About from '../About/About';

const listObject = [
    { name: 'About' },
];

const App = () => {
    return (
        <Router>
            <div className="appContainer">
            <Nav 
            className="navContainer" navHeaderClass="deckHeader" headerText="Deck of Cards" unorderedClass="unorderedList" listObject={listObject} />
                <Switch>
                    <Route exact path={routes.HOME} component={() => <DeckContainer />} />
                    <Route exact path={routes.ABOUT} component={() => <About />} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;