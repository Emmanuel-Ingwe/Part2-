// console.log('KING');

// const start = document.querySelector('#strt');

// start.addEventListener("click", function () {

// });

class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
    }

    start() {
        this.importantMethodToCall();
    }

    importantMethodToCall() {
        console.log('importaNT THINGGG');
    }
}

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton);
// timer.start(); 

// console.log(this);
// const printThis = () => {
//     console.log(this);
// };
// printThis();

// const printThis = function () {
//     console.log(this);
// };

// printThis.call({ godspowergoat: '=cow' });