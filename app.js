





var activePlayer = 0;

var globalScore = 0;   //roundscore

var scores = [0, 0]

var random

document.querySelector('.dice').style.display = "none"


function rollDiceFunction() {

    /////random number///////

    random = Math.floor(Math.random() * 6) + 1


    ///////////////////////////

   



    // //////////////---Update Player Score-----////////////////////////

    document.querySelector("#current-" + activePlayer).innerHTML = random

    globalScore = globalScore + random

    document.querySelector('#score-' + activePlayer).innerHTML = (globalScore)


    console.log("the global score is " + globalScore)

    // isTheWinner() 


    
         




    if (random === 1) {
        console.log('dice landed on -- 1')
        document.querySelector('.dice').src = "dice-" + random + ".png"          
        resetFunction()
        whichPlayer()
    } else {
        console.log('not 1')
        document.querySelector('.dice').style.display = "block"
        document.querySelector('.dice').src = "dice-" + random + ".png"
    }

    

   


}

////-----------New game function --//////

function resetFunction() {

    scores = [0, 0]

    document.querySelector('#current-0').innerHTML = 0
    document.querySelector('#score-0').innerHTML = 0
    document.querySelector('#current-1').innerHTML = 0
    document.querySelector('#score-1').innerHTML = 0

    globalScore = 0;


}


////-----switch plyer function-----/////////////


function whichPlayer() {
    ////////////////////////////////


    scores[activePlayer] = globalScore

    console.log("the score of Player-" + scores[activePlayer] + " is " + globalScore)

    ///////////////////////////////

   



    if (activePlayer === 0) {

        activePlayer = activePlayer + 1

        globalScore = 0 + scores[activePlayer]

        console.log('player-' + activePlayer + ' is next')
        document.querySelector('.player-0-panel').classList.toggle("active")
        document.querySelector('.player-1-panel').classList.toggle("active")



    } else {
        activePlayer = 0

        globalScore = 0 + scores[activePlayer]

        console.log('player-' + activePlayer + ' is next')
        document.querySelector('.player-1-panel').classList.toggle("active")
        document.querySelector('.player-0-panel').classList.toggle("active")



    }

}


//function to determine winner

function isTheWinner() {

    //if-else statement to determine if global point is equal to 100

    if (globalScore >= 10) {


        console.log("Player-" + [activePlayer] + " selected " + random)

        console.log("Player-" + [activePlayer] + " won the game!")
        resetFunction()
        alert("Player-" + [activePlayer] + " won the game!")


    } else {
        console.log('game is not over')
    }
}







///////////////////--On click functions for main three buttons ---////////


document.querySelector(".btn-roll").addEventListener("click", rollDiceFunction)

document.querySelector('.btn-new').addEventListener('click', resetFunction)

document.querySelector('.btn-hold').addEventListener('click', whichPlayer)



