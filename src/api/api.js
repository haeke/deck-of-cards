
export const fetchDeck = (deckName, cardCount) => {
    try {
        return fetch(`https://deckofcardsapi.com/api/deck/${deckName}/draw/?count=${cardCount}`)
            .then(response => response.json())
            .catch(error => {
                throw new Error('error: ', error)
            });
    } catch(error) {
        throw new Error('error: ', error);
    }
}