
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/




var activePlayer = 0;

var globalScore = 0;   //roundscore

var scores = [0, 0]

var random


function rollDiceFunction() {

    /////random number///////

    random = Math.floor(Math.random() * 6) + 1



    // //////////////---Update Player Score-----////////////////////////

    document.querySelector("#current-" + activePlayer).innerHTML = random


    // globalScore = globalScore + random

    globalScore = globalScore + random

    document.querySelector('#score-' + activePlayer).innerHTML = (globalScore)


    
    if (random === 1) {
        document.querySelector('.dice').style.display = "none"
        resetFunction()
        whichPlayer()
    } else {
        console.log('not 1')
        document.querySelector('.dice').style.display = "block"
        document.querySelector('.dice').src = "dice-" + random + ".png"
    }



    // //////////////////---Switch Stement to Update Dice Pic----/////////////////////////////////////////////

    // switch (random) {
    //     default:
    //         document.querySelector('.dice').src = "#";
    //         break;

    //     case 1:
    //         document.querySelector('.dice').src = "dice-1.png";
    //         resetFunction()
    //         whichPlayer()
    //         break;

    //     case 2:
    //         document.querySelector('.dice').src = "dice-2.png";
    //         break;

    //     case 3:
    //         document.querySelector('.dice').src = ('dice-3.png')
    //         break;

    //     case 4:
    //         document.querySelector('.dice').src = ('dice-4.png')
    //         break;


    //     case 5:
    //         document.querySelector('.dice').src = ('dice-5.png')
    //         break;


    //     case 6:
    //         document.querySelector('.dice').src = ('dice-6.png')
    //         break;



    // }


}

////-----------New game function --//////

function resetFunction() {



    document.querySelector('#current-0').innerHTML = 1
    document.querySelector('#score-0').innerHTML = 0
    document.querySelector('#current-1').innerHTML = 1
    document.querySelector('#score-1').innerHTML = 0

    globalScore = 0;

}


////-----switch plyer function-----/////////////


function whichPlayer() {

    if (activePlayer === 0) {

        activePlayer = activePlayer + 1
        console.log('player 2 is next')

        document.querySelector('.player-0-panel').classList.toggle("active")
        document.querySelector('.player-1-panel').classList.toggle("active")



    } else {
        activePlayer = 0
        console.log('player 1 is next')
        document.querySelector('.player-1-panel').classList.toggle("active")
        document.querySelector('.player-0-panel').classList.toggle("active")



    }
}





///////////////////--On click functions for main three buttons ---////////


document.querySelector(".btn-roll").addEventListener("click", rollDiceFunction)

document.querySelector('.btn-new').addEventListener('click', resetFunction)

document.querySelector('.btn-hold').addEventListener('click', whichPlayer)



