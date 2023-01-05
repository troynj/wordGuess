//var user = null;

var win = 0;
var loss = 0;

var timeLeft = 10;
var timerEl = document.getElementById("timer");
var gameOver = false;
var wordGuessed = false;
var restartGame = false;

wordBankArr = [
  "one",
  "two",
  "three",
  "four",
  "bear",
  "blue",
  "house",
  "slime",
  "hidden",
  "temple",
];
var wordIndex = 0;
var startGameEl = document.getElementById("start-game");
var guessListEl = document.getElementById("guess-list")
startGameEl.addEventListener("click", initGame, { once: true });

window.addEventListener("keydown", checkGuess);

function initGame() {

  timeLeft = 10;
  gameOver = false;
  wordGuessed = false;
  wordIndex = Math.floor(Math.random() * wordBankArr.length)
  
  while (guessListEl.firstChild) {
    guessListEl.removeChild(guessListEl.firstChild);
  }
  
  getScore();
  displayWord(null);
  setTimer();
}

function setTimer() {
  var timerID = setInterval(function () {
    timeLeft--;
    timerEl.textContent = "Time Left: " + timeLeft;

    if (!timeLeft || gameOver || wordGuessed) {
      clearInterval(timerID);
      gameOver = true;
      endGame();
    }
    else if (restartGame){
      clearIntereval(timerID)
    }

    //if statement to manage gamestate
    //clearInterval(timerID)
    //manage end game
  }, 1000);
}

function displayWord(letter) {

  for (var i = 0; i < wordBankArr[wordIndex].length; i++) {
    if (letter == null) {
      //create element li
      var tempEl = document.createElement("li");
      //tempEL.textContent = wordBankArr[wordIndex][i];
      tempEl.textContent = "_";
      //tempEL.classList.add("invisible");
      guessListEl.append(tempEl);

      //text content = _
      //append to dom
    } else if (letter === wordBankArr[wordIndex][i]) {
      //traverse dom and select nth child
      //change text content
      //dom element child[i] . textContent = letter
      guessListEl.children[i].textContent = letter.toUpperCase();
    }
    //console.log(guessListEl.child.textContent)
    else {
      console.log("no conditions were met");
    }
  }
}

function checkGuess(event) {
  console.log(event.key);
  var userInput = event.key.toLowerCase()
  if (wordBankArr[wordIndex].includes(userInput)) {
    displayWord(userInput);
  }
  wordGuessed = checkWordStatus();
  console.log(wordGuessed);
}

function checkWordStatus() {
  for (var i = 0; i < wordBankArr[wordIndex].length; i++) {
    if (guessListEl.children[i].textContent === "_") {
      return false;
    } else if (i === wordBankArr[wordIndex].length - 1) {
      return true;
    }
  }
}

function endGame() {
  if (wordGuessed) {
    win++;
  } else {
    loss++;
  }

  setScore();
  getScore();
  startGameEl.addEventListener("click", initGame, { once: true });
}

function setScore() {
  localStorage.setItem("win", win);
  localStorage.setItem("loss", loss);
}

function getScore() {
  var winEl = document.getElementById("win");
  var lossEl = document.getElementById("loss");
  var winTotal = localStorage.getItem("win") ?? 0;
  var lossTotal = localStorage.getItem("loss") ?? 0;
  winEl.textContent = "Wins: " + winTotal;
  lossEl.textContent = "Losses: " + lossTotal;
}
