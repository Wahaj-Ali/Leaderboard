const displayScores = (scores) => {
  const scoresTable = document.querySelector('.scores');
  scoresTable.innerHTML = '';
  // const inddividualScore = `<li class="individual-score">Name: 92</li>
  //   <li class="individual-score">Name: 100</li>
  //   <li class="individual-score">Name: 20</li>
  //   <li class="individual-score">Name: 58</li>
  //   <li class="individual-score">Name: 89</li>`;
  // scoresTable.innerHTML += inddividualScore;
  scores.forEach((score) => {
    const inddividualScore = `<li class="individual-score">${score.user}: ${score.score}</li>`;
    scoresTable.innerHTML += inddividualScore;
  });
};

export default displayScores;