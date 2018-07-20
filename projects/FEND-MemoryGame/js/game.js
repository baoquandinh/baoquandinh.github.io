/*
* Game class keeps track of the game state.\
*  - Creates the deck
*  - Monitor scores, flips, turns, and player rating
*  - Restarts the game
*/

let tempMatchingCardArray = [];
let matchingCard = [];
let starList = document.querySelector('.stars');


class Game {
    constructor() {
        this.counter = 0;
        this.moveCounter = 0;
        this.wrongCounter = 0;
        this.moves = document.querySelector(".moves");
        this.stars = document.querySelector(".stars");
        this.timerElement = document.querySelector(".timer");
    }
    // Creates a new deck and shuffles
    start() {
        let deck = new Deck();
        deck.shuffle();
        deck.create();
        game.createStars();
    }

    // Restart the game with the same deck, just randomizes the position and resets move count along with star counter
    restart() {
        document.querySelector('.winner-popup').classList.remove('show');
        game.resetTimer();
        game.resetCounter();
        game.createStars();
        for (let card in cards) {
            cards[card].remove();
        }
        cards = [];
        tempMatchingCardArray = [];
        matchingCard = [];
        game.start();
    }

    // Update the move counter per flip
    updateMoves() {
        this.counter += 1;
        if (this.counter === 1) {
            setInterval(game.startTimer(),1000);
        }
        if (this.counter % 2 === 0) {
            this.moveCounter += 1;
            this.moves.textContent = String(this.moveCounter);
        }
    }

    // Restarts the timer
    resetTimer() {
        clearInterval(game.interval);
        this.timerElement.textContent = "00:00:00";
    }

    startTimer() {
        this.sec = 0;
        this.min = 0;
        this.hour = 0;
        this.interval = setInterval(game.timer, 1000);
    }

    timer() {
        game.sec++;

        if (game.sec === 60) {
            console.log("increment a minute");
            game.sec = 0;
            game.min++;
        }
        if (game.min === 60) {
            game.min = 0;
            game.hour++;
        }
        if (game.hour === 24) {
            console.log("Please stop you took way too long");
        }
        if (game.hour <= 9 && game.min <= 9 && game.sec <= 9) {
            game.timerElement.innerHTML = `0${game.hour}:0${game.min}:0${game.sec}`;
        }
        else if ( game.hour <= 9 && game.min <= 9 && game.sec > 9) {
            game.timerElement.innerHTML = `0${game.hour}:0${game.min}:${game.sec}`;
        }
        else if ( game.hour <= 9 && game.min > 9 && game.sec <= 9) {
            game.timerElement.innerHTML = `0${game.hour}:${game.min}:0${game.sec}`;
        }
        else if ( game.hour <= 9 && game.min > 9 && game.sec > 9) {
            game.timerElement.innerHTML = `0${game.hour}:${game.min}:${game.sec}`;
        }
        else if ( game.hour >= 10 && game.min >9 && game.sec > 9) {
            game.timerElement.innerHTML = `${game.hour}:0${game.min}:${game.sec}`;
        }
        else if ( game.hour >= 10 && game.min > 9 && game.sec <= 9) {
            game.timerElement.innerHTML = `${game.hour}:${game.min}:0${game.sec}`;
        }
        else if ( game.hour >= 10 && game.min <= 9 && game.sec > 9) {
            game.timerElement.innerHTML = `${game.hour}:0${game.min}:${game.sec}`;
        }
        else if ( game.hour >= 10 && game.min <= 9 && game.sec <= 9) {
            game.timerElement.innerHTML = `${game.hour}:0${game.min}:0${game.sec}`;
        }
        else {
            console.log("I pass too")
            game.timerElement.innerHTML = `${game.hour}:${game.min}:${game.sec}`;
        }
    }

    // Resets all the counters
    resetCounter() {
        game.counter = 0;
        game.moveCounter = 0;
        game.wrongCounter = 0;
        game.moves.textContent = String(game.moveCounter);
    }

    // Removes the last child element from the 'star' parent node
    removeStars() {
        this.stars.removeChild(this.stars.lastElementChild);
    }

    // Regardless of how many stars are left, this will set the stars back to 3
    createStars() {
        this.starCounter = starList.childElementCount;
        if (this.starCounter === 3) {
            return;
        }
        while (this.starCounter < 3) {
            let starListItem =  document.createElement('li');
            let starItem = document.createElement('i');
            starItem.className = 'fa fa-star';
            starListItem.appendChild(starItem);
            starList.appendChild(starListItem);
            this.starCounter++;
        }
    }

    // Show that cards are matching
    match() {
        for (let card in tempMatchingCardArray) {
            tempMatchingCardArray[card].isMatched = true;
            tempMatchingCardArray[card].listItem.className = 'card match';
            matchingCard.push(tempMatchingCardArray[card]);
        }

        tempMatchingCardArray.length = 0;
    }

    // Cards that don't match are flipped back over
    noMatch() {
        for (let card in tempMatchingCardArray) {
            tempMatchingCardArray[card].listItem.className = 'card';
            tempMatchingCardArray[card].isFlipped = false;
        }
        game.wrongCounter += 1;
        tempMatchingCardArray.length = 0;
    }

    // Checks the two selected cards to see if they are a match
    checkForMatch() {
        if (this.wrongCounter === cards.length/2) {
            game.removeStars();
        }
        if (this.wrongCounter === cards.length) {
            game.removeStars();
        }
        // if the cards are matching, leave flipped otherwise, flipped them back
        if (tempMatchingCardArray[0].symbol === tempMatchingCardArray[1].symbol) {
           game.match();
           game.checkForWinner();
        }
        else {
            for (let card in tempMatchingCardArray) {
                tempMatchingCardArray[card].listItem.classList.add('no-match');
                tempMatchingCardArray[card].listItem.classList.add('shake-incorrect');
            }
            setTimeout('game.noMatch()', 800);
        }
    }

    checkForWinner() {
        if ((this.moveCounter >= cards.length/2) && (matchingCard.length === cards.length) ) {
            console.log("CONGRATES YOU WON");
            document.querySelector('.winner-popup').classList.add('show');
            clearInterval(game.interval);
        } else {
            console.log("No point checking yet");
        }
    }
}




