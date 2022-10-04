'use strict';


const number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let HighScore = 0;

const displayMsg = function(msg) {
    document.querySelector('.message').textContent = msg;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value)
    if (!guess) {
        document.querySelector('.message').textContent = ' ❌No Number';
    } else if (guess === number) {
        document.querySelector('.number').textContent = number;
        displayMsg('🎉Correct Number');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';


        if (score > HighScore) {
            HighScore = score
            document.querySelector('.highscore').textContent = HighScore;
        }

    } else if (guess !== number) {

        if (score > 1) {
            document.querySelector('.message').textContent = guess > number ? ' Too High💹' : 'Too Low〽';

            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMsg('💥You Loos The Game');
            document.querySelector('.score').textContent = '0';
        }
    }

})

document.querySelector('.again').addEventListener('click', function() {
    const number = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = " ";
    displayMsg('Start Guessing...');
    document.querySelector('.score').textContent = score;

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';


})