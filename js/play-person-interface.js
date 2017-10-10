var Player = require('./../js/play-person.js').playerModule;

var player1 = new Player('Player One');
var player2 = new Player('Player Two');
// logic for user interface
$(document).ready(function(){
  $("#totalScore1").text(0);
  $("#totalScore2").text(0);
  $('#p1Form').submit(function(event) {
    event.preventDefault();
    currentRoll = player1.score();
    $('#currentRoll1').text(currentRoll);
    $('#currentTotal1').text(player1.totalRoll);
  });

  $('#hold1').click(function() {
    player1.hold();
    if (player1.totalScore >= 50) {
      $('.playerOneWins').show();
      $('.p1').hide();
      $('.playerScores').hide();
    } else {
      $("#totalScore1").text(player1.totalScore);
      player1.totalRoll = 0;
      $('#currentRoll1').text(0);
      $('#currentTotal1').text(0);
      $('.p1,.p2').toggle();
    }
  });

  $('#p2Form').submit(function(event) {
    event.preventDefault();
    currentRoll = player2.score();
    $('#currentRoll2').text(currentRoll);
    $('#currentTotal2').text(player2.totalRoll);
  });

  $('#hold2').click(function() {
    player2.hold();
    if (player2.totalScore >= 50) {
      $('.playerTwoWins').show();
      $('.p2').hide();
      $('.playerScores').hide();
    } else {
      $("#totalScore2").text(player2.totalScore);
      player2.totalRoll = 0;
      $('#currentRoll2').text(0);
      $('#currentTotal2').text(0);
      $('.p1,.p2').toggle();
    }
  });

  $('.playAgain').click(function(event) {
    location.href = location.href;
  });
});
