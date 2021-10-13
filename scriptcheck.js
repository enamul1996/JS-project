'use strict';

let scorep1 = document.querySelector('#score--0')
let scorep2 = document.querySelector('#score--1')
let currentScorep1 = document.querySelector('#current--1');
let currentScorep2  = document.querySelector('#current--0');
//-------------------------------------
let diceOne = document.querySelector('.dice')
let btnNew = document.querySelector('.btn--new')
let holdButton = document.querySelector('.btn--hold')
let rollDice = document.querySelector('.btn--roll')

let playing ,scores, currentScore , activePlayer

let init = function(){
    scores=[0,0]    //
    currentScore = 0  
    activePlayer = 0
    playing = true

    scorep1.textContent = 0
    scorep2.textContent = 0
    currentScorep1.textContent = 0
    currentScorep2.textContent = 0

    document.querySelector(`#name--0`).textContent = "Player-1"
    document.querySelector(`#name--1`).textContent = "Player-2"

}

init()

// player starting a new 
btnNew.addEventListener('click',init)

//  Roll dice functionality

rollDice.addEventListener('click',function(){

    if(playing){
        let dice = Math.floor(Math.random()*6)+1 // 4
        diceOne.src = `dice-${dice}.png`;

        if(dice !== 1){
            currentScore = currentScore + dice
            document.querySelector(`#current--${activePlayer}`)
            .textContent = currentScore

        }
        else{
          
            switchPlayer()

        }
    }


})



function switchPlayer(){
    document.querySelector(`#current--${activePlayer}`).textContent = 0
    currentScore = 0
    activePlayer = activePlayer === 0 ? 
    activePlayer = 1:activePlayer = 0

}

holdButton.addEventListener('click',function(){

    scores[activePlayer] =  scores[activePlayer] + currentScore

    document.querySelector(`#score--${activePlayer}`)
    .textContent= scores[activePlayer]

    if(scores[activePlayer] >= 20){
        document.querySelector(`#name--${activePlayer}`)
        .textContent = "Winner"
        playing = false
    }

    switchPlayer()



})


















