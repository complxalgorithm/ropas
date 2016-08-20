$(window).load(function() {

  var movesContainer = $('#moves'),
      playerCount = $('.Player-count'),
      computerCount = $('.Computer-count');

  $('#moves li').on("click", function() {
    var yourMove = $(this).data('move');
    processMoves(yourMove);

    var icon = $(this).find('.fa');
    icon.addClass('animating');

    var s = setTimeout(function(icon) {
      $('#moves li .fa').removeClass('animating');
      clearTimeout();
    }, 5000);
  });

});

function processMoves(yourMove) {
  var opponentMove = generateRandomOpponentMove();
  calculateWinner(yourMove,opponentMove);
}

function generateRandomOpponentMove() {
  var availableMoves = ['rock','paper','scissors'],
      randomNumber = Math.floor(Math.random() * availableMoves.length),
      opponentMove = availableMoves[randomNumber];

  return opponentMove;
}

function calculateWinner(yourMove, opponentMove) {
  switch(yourMove) {
    case 'rock':
      if(opponentMove === 'rock') {
        return 'draw';
      } else if (opponentMove === 'scissors') {
        youWin();
      } else {
        youLose();
      }
      break;
    case 'paper':
      if(opponentMove === 'paper') {
        return 'draw';
      } else if (opponentMove === 'rock') {
        youWin();
      } else {
        youLose();
      }
      break;
    case 'scissors':
      if(opponentMove === 'scissors') {
        return 'draw';
      } else if (opponentMove === 'paper') {
        youWin();
      } else {
        youLose();
      }
      break;
  }
}

function youWin() {
  var playerScore = $('.Player-count');
  var playerScoreUpdated = parseInt(playerScore.text()) + 1;
  playerScore.text(playerScoreUpdated);
}

function youLose() {
  var computerScore = $('.Computer-count');
  var computerScoreUpdated = parseInt(computerScore.text()) + 1;
  computerScore.text(computerScoreUpdated);
}
