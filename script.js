const scoreText = document.querySelector('.score');
const messageText = document.querySelector('.message');
const checkButton = document.querySelector('.check');
const number = document.querySelector('.number');
const displayHighScore = document.querySelector('.highscore');
const playAgain = document.querySelector('.again');
const body = document.querySelector('body');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  messageText.textContent = message;
};

const changeWidth = function (width) {
  number.style.width = width;
};

const changeBackground = function (color) {
  body.style.backgroundColor = color;
};

const displaySecretNum = function (num) {
  number.textContent = num;
};

//Guess number logic
checkButton.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //When there is no input
  if (!guess) {
    displayMessage('⛔️ No number!');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number! 🥳');
    changeWidth('30rem');
    changeBackground('limegreen');
    displaySecretNum(secretNumber);

    if (score > highScore) {
      highScore = score;
      displayHighScore.textContent = score;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      messageText.textContent =
        guess > secretNumber ? ' 📈 Too high!' : ' 📉 Too low!';
      score--;
      scoreText.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      scoreText.textContent = 0;
    }
  }
});

//Reset the game
playAgain.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  messageText.textContent = 'Start guessing...';
  scoreText.textContent = score;
  guess.value = '';
  changeBackground('#222');
  changeWidth('15rem');
  number.textContent = '?';
});
