
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
