

turnObject = {turn: 'X'};
findWinner = {winner: null}

console.log(turnObject.turn == window.turnObject)
console.log(typeof(this.turnObject))


function StartGame() {

  for (var i = 1; i<=9; i++) {
    clearBox(i);
  }

  // turnObject.turn;
  // findWinner.winner;
  setMessage(turnObject.turn + " get's to start.")

}

function setMessage(msg) {
  document.getElementById('message').innerText = msg;
}

function nextMove(square) {
  if (findWinner.winner != null){
    setMessage(turnObject.turn + ' already won!')
  }else if(square.innerText == '') {
    console.log(square.innerText);
    square.innerText = turnObject.turn;
    switchTurn();
  } else {
    setMessage('Hey-hey-hey!!! Pick another square');
  }
}


function switchTurn() {
  if(checkForWinner(turnObject.turn)) {
    setMessage('Congratulation ' + turnObject.turn + ', you won!')
    findWinner.winner = turnObject.turn;
  }else if(turnObject.turn == 'X') {
    turnObject.turn = '0';
    setMessage("It's " + turnObject.turn + "'s turn")
  } else {
    turnObject.turn = 'X';
    setMessage("It's " + turnObject.turn + "'s turn")
  }
}

function checkForWinner(move) {
  var result = false;
  if (checkRow(1, 2, 3, move) ||
      checkRow(4, 5, 6, move) ||
      checkRow(7, 8, 8, move) ||
      checkRow(1, 4, 7, move) ||
      checkRow(2, 5, 8, move) ||
      checkRow(3, 6, 9, move) ||
      checkRow(1, 5, 9, move) ||
      checkRow(3, 5, 7, move)) {
        result = true;
      }
      return result;
}

function checkRow (a, b, c, move) {
  var result = false;
  if (getBox(a) == move && getBox(b) == move && getBox(c) == move){
    result = true;
  }
  return result;
}

function getBox(number) {
  return document.getElementById('s' + number).innerText;
}

function clearBox(number) {
  document.getElementById('s' + number).innerText = '';
}
