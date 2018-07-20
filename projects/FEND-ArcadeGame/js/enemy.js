// Enemies our player must avoid
class Enemy {
    constructor() {
        this.sprite = 'images/enemy-bug.png';
        this.x = 0;
        this.y = this.randomY();
        this.currentSpeed = this.speedLevel();
    }

    // Update the enemy's position
    // Parameter: dt, a time delta between ticks
    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        if (this.x >= 500) {
            this.x = 0;
            this.y = this.randomY();
            this.currentSpeed = this.speedLevel();
        }
        this.x += dt * this.currentSpeed;
    };

    // Randomly update the enemy's y position (vertical position)
    randomY() {
        return Math.floor(Math.random() * 300 + 40);
    };

    // Randomly assign the speed of the enemy
    speedLevel() {
        return Math.floor(Math.random() * this.randomInt()) + this.randomInt() * 100;
    }

    randomInt() {
        return Math.floor(Math.random() * 4) + 1;
    }

    // Draw the enemy on the screen
    render(ctx) {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };
};