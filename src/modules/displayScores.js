const displayScores = (scores) => {
  const scoresTable = document.querySelector('.scores');
  scoresTable.innerHTML = '';
  scores.forEach((score) => {
    const inddividualScore = `<li class="individual-score">${score.user}: ${score.score}</li>`;
    scoresTable.innerHTML += inddividualScore;
  });
};

export default displayScores;