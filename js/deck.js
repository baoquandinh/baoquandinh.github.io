// Create a list that holds all the card names
const cardNames = ['diamond', 'paper-plane-o', 'anchor', 'bolt', 'cube', 'anchor', 'leaf', 'bicycle', 'diamond', 'bomb', 'leaf', 'bomb', 'bolt', 'bicycle', 'paper-plane-o', 'cube'];

const deckElement = document.querySelector('.deck');
const cardFragment = document.createDocumentFragment();

// Creates an empty array to hold onto the card objects once they are created
let cards = [];

// Creates a deck object
class Deck {
    constructor() {
        //this.cards = [];
    }

    // Creates the card object and adds them to the deck
    create(){
        for (let cardIndex in cardNames) {
            let cardName = cardNames[cardIndex];
            let card = new Card(cardFragment, cardName);
            cards.push(card);
        }
        //console.log(cards);
        deckElement.appendChild(cardFragment);
    }

    // Shuffle function from http://stackoverflow.com/a/2450976
    shuffle() {
        let currentIndex = cardNames.length, temporaryValue, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = cardNames[currentIndex];
            cardNames[currentIndex] = cardNames[randomIndex];
            cardNames[randomIndex] = temporaryValue;
        }
        return cards;
    }



}


