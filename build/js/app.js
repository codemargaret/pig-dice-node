(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

function Player(name) {
  this.name = name;
  this.totalRoll = 0;
  this.totalScore = 0;
};

Player.prototype.score = function() {
  roll =  Math.floor(Math.random() * (6) + 1);

  if (roll === 1) {
    this.totalRoll = 0;
    alert('Rolled a One! Next Player Turn...');
    $('.p1,.p2').toggle();
  } else {
    this.totalRoll = this.totalRoll + roll;
  }
  return roll;
};

Player.prototype.hold = function() {
  this.totalScore += this.totalRoll;
};

exports.playerModule = Player;

},{}],2:[function(require,module,exports){
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

},{"./../js/play-person.js":1}]},{},[2]);
