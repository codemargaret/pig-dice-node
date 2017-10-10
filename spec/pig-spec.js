var Player = require('./../js/play-person.js').playerModule;

describe('Player', function() {
  var newPlayer;

  beforeEach(function() {
    newPlayer = new Player('Clarence')
  });

  it('it will initialize Player.totalScore at zero', function() {
    expect(newPlayer.totalScore) .toEqual(0)
  });

  it('it will initialize Player.totalRoll at zero', function() {
    expect(newPlayer.totalRoll) .toEqual(0)
  });

  it('it will return a random number', function() {
    expect(Number.isInteger(newPlayer.score())) .toEqual(true)
  });

  it('it will hold the current roll', function() {
    roll = newPlayer.score()
    newPlayer.hold()
    expect(newPlayer.totalScore) .toEqual(roll)
  });
});
