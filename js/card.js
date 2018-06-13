class Card {
    constructor(cardFragment, symbol){
        this.isMatched = false;
        this.isFlipped = false;
        this.symbol = symbol;
        this.listItem = document.createElement('li');
        this.icon = document.createElement('i');
        this.listItem.className = `card`;
        this.icon.className = `fa fa-${symbol}`;
        this.listItem.addEventListener('mousedown', this.flip.bind(this));
        this.listItem.appendChild(this.icon);
        cardFragment.appendChild(this.listItem);
    }

     // Flips the card
     flip(evt) {
        if (matchingCardArray.length === 2 ) {
            console.log("Please wait");
        } else {
            let item = evt.target;
            if (item.classList.contains('card')) {
                item.classList.add('show');
                item.classList.add('open');
            }
            if (this.isFlipped === true || this.isMatched === true) {
                console.log("Card is already flipped or has a matching pair");
            } else {
                this.isFlipped = true;
                game.updateMoves();
                matchingCardArray.push(this);

                if (game.counter % 2 == 0) {
                    game.checkForMatch();
                }
            }
        }
    }

    remove() {
        this.listItem.outerHTML = "";
    }

}
