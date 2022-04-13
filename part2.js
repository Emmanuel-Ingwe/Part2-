// console.log('KING');

// const start = document.querySelector('#strt');

// start.addEventListener("click", function () {

// });


const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart() {
        console.log('Timer STRTED');
    },
    onTick() {
        console.log('TIMER JUST TICKED');
    },
    onComplete() {
        console.log('TimeR IS COMPLETED');
    }
});
