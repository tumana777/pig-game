'use strict'

const rollDice = document.querySelector('.btn--roll');
const newGame = document.querySelector('.btn--new');
const hold = document.querySelector('.btn--hold');
const imgDice = document.querySelector('.dice');
const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const player1currentEl = document.getElementById('current--0');
const player2currentEl = document.getElementById('current--1');
const player1totalEl = document.getElementById('score--0');
const player2totalEl = document.getElementById('score--1');

let player1current = 0;
let player2current = 0;
let player1total = 0;
let player2total = 0;

rollDice.addEventListener('click', () => {
    const dice = Math.ceil(Math.random() * 6);
    imgDice.classList.remove('hidden');
    imgDice.src = `img/dice-${dice}.png`;

    if (player1.classList.contains('player--active')) {
        player1current += dice;
        player1currentEl.textContent = player1current;
    } else {
        player2current += dice;
        player2currentEl.textContent = player2current;
    }

    if (dice === 1) {
        if (player1.classList.contains('player--active')) {
            player1current = 0;
            player1currentEl.textContent = player1current;
            switchPlayer2();
        } else {
            player2current = 0;
            player2currentEl.textContent = player2current;
            switchPlayer1();
        }
    }
});

hold.addEventListener('click', () => {
    if (player1.classList.contains('player--active')) {
        player1total += player1current;
        player1totalEl.textContent = player1total;
        player1current = 0;
        player1currentEl.textContent = player1current;
        switchPlayer2();
        if (player1total >= 100) {
            player1.classList.add('player--winner');
            rollDice.disabled = true;
            hold.disabled = true;
        };
    } else {
        player2total += player2current;
        player2totalEl.textContent = player2total;
        player2current = 0;
        player2currentEl.textContent = player2current;
        switchPlayer1();
        if (player2total >= 100) {
            player2.classList.add('player--winner');
            rollDice.disabled = true;
            hold.disabled = true;
        }
    }
});

newGame.addEventListener('click', () => {
    player1current = 0;
    player1total = 0;
    player2current = 0;
    player2total = 0;
    player1currentEl.textContent = player1current;
    player1totalEl.textContent = player1total;
    player2currentEl.textContent = player2current;
    player2totalEl.textContent = player2total;
    switchPlayer1();
    imgDice.classList.add('hidden');
    player1.classList.remove('player--winner');
    player2.classList.remove('player--winner');
    rollDice.disabled = false;
    hold.disabled = false;
})

function switchPlayer2() {
    player1.classList.remove('player--active');
    player2.classList.add('player--active');
}

function switchPlayer1() {
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
}