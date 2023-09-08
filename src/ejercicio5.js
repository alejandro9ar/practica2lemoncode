class SlotMachine {
    constructor() {
        this.coins = 0;
    }

    insertCoin() {
        this.coins++;
    }

    spin() {
        const reels = [];
        for (let i = 0; i < 3; i++) {
            reels.push(Math.random() < 0.5);
        }
        return reels.every(result => result === true);
    }

    play() {
        this.insertCoin();
        const isWin = this.spin();
        if (isWin) {
            console.log(`Congratulations!!! You won ${this.coins} coins!!`);
            this.resetCoins();
        } else {
            console.log('Good luck next time!!');
        }
    }

    resetCoins() {
        this.coins = 0;
    }
}

function ejercicio5() {
    const machine1 = new SlotMachine();
    for (let i = 0; i < 5; i++) {
        machine1.play();
    }
}