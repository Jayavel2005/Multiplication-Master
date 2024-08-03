const question = document.querySelector(".js-question");
const error = document.querySelector(".js-error");
const jsInputBox = document.querySelector(".js-input-box");
const correctScore = document.querySelector(".js-correct-score");
const incorrectScore = document.querySelector(".js-incorrect-score");

let answer;

const multiplicationQuestion = {
  question: "",
  answer: null,
};

let score = JSON.parse(localStorage.getItem("score")) || { correct: 0, incorrect: 0 };
console.log(score);

const generateQuestion = () => {
  const number_1 = Math.floor(Math.random() * 10) + 1;
  const number_2 = Math.floor(Math.random() * 10) + 1;
  answer = number_1 * number_2;
  multiplicationQuestion.question = `What is ${number_1} x ${number_2}?`;
  multiplicationQuestion.answer = answer;
  question.innerHTML = multiplicationQuestion.question;
}

const updateScore = () => {
  localStorage.setItem("score", JSON.stringify(score));
}

const displayScore =()=> {
  const storedScore = JSON.parse(localStorage.getItem("score"));
  if (storedScore) {
    score = storedScore;
    correctScore.textContent = `Correct: ${score.correct}`;
    incorrectScore.textContent = `Incorrect: ${score.incorrect}`;
  } else {
    correctScore.textContent = `Correct: 0`;
    incorrectScore.textContent = `Incorrect: 0`;
  }
}

const submitAnswer = () => {
  const userAnswer = jsInputBox.value;

  if (userAnswer === "") {
    error.style.display = "block";
  } else {
    error.style.display = "none";
    if (multiplicationQuestion.answer === parseInt(userAnswer)) {
        alert("Your answer is correct");
      score.correct += 1;
      correctScore.textContent = `Correct: ${score.correct}`;
      jsInputBox.value = "";
      setTimeout(() => {
        generateQuestion();
      }, 1000);
    } else {
      score.incorrect += 1;
      alert(`Your answer is wrong.The correct answer is ${multiplicationQuestion.answer}`);
      incorrectScore.textContent = `Incorrect: ${score.incorrect}`;
      jsInputBox.value = "";
      setTimeout(() => {
        generateQuestion();
      }, 1000);
    }
  }
  updateScore();
};

const  resetScore = () => {
  score.correct = 0;
  score.incorrect = 0;
  updateScore();
  displayScore();
}

generateQuestion();
displayScore();

