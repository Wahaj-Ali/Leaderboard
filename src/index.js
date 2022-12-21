import './style.css';
import displayScores from './modules/displayScores.js';
import getScores from './modules/getScores.js';
import postScores from './modules/postScores';

const refresh = document.getElementById('refresh');
const scoresContainer = document.querySelector('.scores');

const form = document.getElementById('form');
const gameApiId = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/xwmYsmSekdGODUZnA7Hl/scores/';

// post scores

form.addEventListener('submit', (e) => {
  e.preventDefault();
  postScores(gameApiId);
});

// display scores on refresh

refresh.addEventListener('click', () => {
  scoresContainer.innerHTML = '';
  getScores(gameApiId).then((data) => displayScores(data.result));
});

// display scores on page reload

window.onload = getScores(gameApiId).then((data) => displayScores(data.result));