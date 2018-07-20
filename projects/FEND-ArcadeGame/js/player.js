// Now write your own this class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
    constructor() {
        this.sprite = 'images/char-boy.png';
        this.x = 200;
        this.y = 420;
        this.constant = 1000;
        this.isOver = false;
        this.lifeRemaining = parseInt(document.querySelector(".player-life").textContent);
    }

    handleInput(allowedKeys) {
        if (!this.isOver) {
            this.inputKey = allowedKeys;
        }
    }
    // Updates the this
    update(dt) {
        switch (this.inputKey) {
            case 'up':
                this.y -= dt * this.constant;
                this.inputKey = null;
                console.log(this.x, this.y);
                break;
            case 'down':
                this.y += dt * this.constant;
                this.inputKey = null;
                console.log(this.x, this.y);
                break;
            case 'left':
                this.x -= dt * this.constant;
                this.inputKey = null;
                console.log(this.x, this.y);
                break;
            case 'right':
                this.x += dt * this.constant;
                this.inputKey = null;
                console.log(this.x, this.y);
                break;
            default:
                break;
        }
        if (this.y < -15) {
            this.y = -15;
        }
        if (this.y > 440) {
            this.y = 440
        }
        if (this.x < -10) {
            this.x = -10
        }
        if (this.x > 415) {
            this.x = 415
        }
        console.log("Final:", this.x, this.y);
    }

    loseLife() {
        this.lifeRemaining -= 1;
        document.querySelector(".player-life").textContent = this.lifeRemaining;
        this.x = 200, this.y = 420;
    }

    reset() {
        this.x = 200, this.y = 420;
        this.lifeRemaining = 5;
        this.isOver = false;
        document.querySelector(".player-life").textContent = this.lifeRemaining;
    }

    default () {
        this.x = 200, this.y = 420;
    }

    render(ctx) {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}