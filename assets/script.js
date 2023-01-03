var score = {
  win: null,
  loss: null,
};

//var user = null;

var timeLeft = 10;

// var wordsStatusArr = [
//   { o: false, n: false, e: false },
//   { t: false, w: false, o: true },
//   {
//     t: false,
//     h: false,
//     r: false,
//     e: false,
//     e: false,
//   },
//   { f: false, o: false, u: false, r: false },
// ];
wordBankArr = ["one", "two", "three", "four"]
var wordIndex = 0;

var startGameEl = document.getElementById("start-game");

startGameEl.addEventListener("click", initGame());

window.addEventListener("keydown", checkGuess());

function initGame() {
    //use session id to identify username - user = promt: whats your name
    //Math.random(Math.floor() * 4)
  displayWord(null);
  setTimer();

}

function setTimer() {
    var timerID = setInterval(function () {
      timeLeft--;
  
      //if statement to manage gamestate
      //clearInterval(timerID)
      //manage end game
    }, 1000);
  }

function displayWord(letter) {

//(for var i = 0; i < wordBankArr[wordIndex].length; i++ )
//if letter = null {
    //create element li
    //text content = _
    //append to dom
// else if (letter  === wordBankArr[wordIndex][i])
    //dom element child[i] . textContent = letter
    
    //else {
        //console.log("error in if")
        //}
    }

function checkGuess(event) {
  //iterate through wordArr[wordIndex]
  //if (wordBankArr[wordIndex].includes(event.key.toString()))
  //displayWord(event.key)
  //
}

//function endGame () {
    //if word guessed
    //score.win++
    //else
    //score.loss++
    //timeLeft = 0
    
    //saveScore
//}

function saveScore() {
    localStorage.setItem("user", JSON.stringify(score))
}

//render local storage
//win game
//lose game
