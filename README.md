# _Pig Dice (Node)_

#### _This application allows two players to play 'Pig Dice', 10.10.17}_

#### By _**Margaret Berry & David Hale**_

## Description

_Each turn, a player repeatedly rolls a die. After each roll, the player decides whether to 'hold' or roll again. If a 1 is rolled, the player scores nothing for that turn, and it becomes the next player's turn. The first player to get 100 points wins. The app displays the current roll and total score for each player._

## Project Goals
* _Re-create an existing project as a NodeJS application with a Gulpfile._
* _Practice using Jasmine and Karma for testing._

## User Stories
* _As a user, I want to..._
* _...play a game of Pig Dice with a friend._

## Setup/Installation Requirements
_Run the following commands in Terminal:_

1. `$ git clone` [this repository](https://github.com/codemargaret/pig-dice-node.git)
2. `$ cd pig-dice-node`
3. `$ open index.html`

## Specifications
| Spec              | Input | Output |
|-------------------|-------|--------|
| Game will generate a random number between 1 and 6    | User presses 'roll'     | 4      |
| If the number is 1, the turn is ended and the total for the turn is zero   | User presses 'roll'     | 1 - Your turn is over.      |
| If the player decides to hold, the turn score is added to the total.    | User presses 'hold'     | Total score: 16      |

## Known Bugs
_There are no known bugs at this time._

## Support and contact details
_If you have issues, questions, ideas, or concerns, please contact [Margaret](codeberry1@gmail.com). Feel free to make a contribution to the code._

## Technologies Used
* _JavaScript_
* _NodeJS_
* _Gulp_

### License
*This software is licensed under the MIT license.*

Copyright (c) 2017 **_Margaret Berry and David Hale_**
