const displayScores = (scores) => {
  const scoresTable = document.querySelector('.scores');
  scoresTable.innerHTML = '<li class="individual-score h"><p>Player</p> <p>Score</p></li>';
  scores.sort((a, b) => b.score - a.score).forEach((score) => {
    const inddividualScore = `<li class="individual-score"><p>${score.user}</p> <p>${score.score}</p></li>`;
    scoresTable.innerHTML += inddividualScore;
  });
};

export default displayScores;