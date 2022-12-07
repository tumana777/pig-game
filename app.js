'use strict'

const rollDice = document.querySelector('.btn--roll');
const newGame = document.querySelector('.btn--new');
const hold = document.querySelector('.btn--hold');
const imgDice = document.querySelector('.dice');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const player1scoreEl = document.getElementById('score--0');
const player2scoreEl = document.getElementById('score--1');
const player1currentEl = document.getElementById('current--0');
const player2currentEl = document.getElementById('current--1');

let player1score = 0;
let player2score = 0;
let player1current = 0;
let player2current = 0;

let dice;

rollDice.addEventListener('click', () => {
    dice = Math.ceil(Math.random() * 6);

    if (player1.classList.contains('player--active')) {
        player1score += dice;
        player1scoreEl.textContent = player1score;
    } else {
        player2score += dice;
        player2scoreEl.textContent = player2score;
    }

    if (dice === 1) {
        imgDice.src = 'img/dice-1.png';
        if (player1.classList.contains('player--active')) {
            player1score = 0;
            player1scoreEl.textContent = player1score;
            player1.classList.remove('player--active');
            player2.classList.add('player--active');
        } else {
            player2score = 0;
            player2scoreEl.textContent = player2score;
            player1.classList.add('player--active');
            player2.classList.remove('player--active');
        }
    } else if (dice === 2) {
        imgDice.src = 'img/dice-2.png'
    } else if (dice === 3) {
        imgDice.src = 'img/dice-3.png'
    } else if (dice === 4) {
        imgDice.src = 'img/dice-4.png'
    } else if (dice === 5) {
        imgDice.src = 'img/dice-5.png'
    } else if (dice === 6) {
        imgDice.src = 'img/dice-6.png'
    }

    

});

hold.addEventListener('click', () => {
    if (player1.classList.contains('player--active')) {
        player1current += player1score;
        player1currentEl.textContent = player1current;
        player1score = 0;
        player1scoreEl.textContent = player1score;
        player1.classList.remove('player--active');
        player2.classList.add('player--active');
    } else {
        player2current += player2score;
        player2currentEl.textContent = player2current;
        player2score = 0;
        player2scoreEl.textContent = player2score;
        player1.classList.add('player--active');
        player2.classList.remove('player--active');
    }
});

newGame.addEventListener('click', () => {
    player1score = 0;
    player1current = 0;
    player2score = 0;
    player2current = 0;
    player1scoreEl.textContent = player1score;
    player1currentEl.textContent = player1current;
    player2scoreEl.textContent = player2score;
    player2currentEl.textContent = player2current;
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
    imgDice.src = 'img/dice-5.png';
})