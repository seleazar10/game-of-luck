
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var activePlayer = 0;

var globalScore = 0;


function rollDiceFunction() {

    var random = Math.floor(Math.random() * 6) + 1

    document.querySelector("#current-" + activePlayer).innerHTML = random

   
    // //////////////---Update Player Score-----////////////////////////
   
   

    globalScore = globalScore + random

    document.querySelector('#score-' + activePlayer).innerHTML = (globalScore)


    // //////////////////////////////////////////

    switch (random) {
        default:
            document.querySelector('.dice').src = "#";
            break;

        case 1:
            document.querySelector('.dice').src = "dice-1.png";
            break;

        case 2:
            document.querySelector('.dice').src = "dice-2.png";
            break;

        case 3:
            document.querySelector('.dice').src = ('dice-3.png')
            break;

        case 4:
            document.querySelector('.dice').src = ('dice-4.png')
            break;


        case 5:
            document.querySelector('.dice').src = ('dice-5.png')
            break;


        case 6:
            document.querySelector('.dice').src = ('dice-6.png')
            break;



    }

   








}


document.querySelector(".btn-roll").addEventListener("click", rollDiceFunction)


// document.querySelector('.dice').style.display = 'none';
