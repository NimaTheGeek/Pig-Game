/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores = [0,0];
var roundScores = 0;
var activePlayer = 0;

//hide the selection
document.querySelector('.dice').style.display = 'none' ;

//EventListener take 2 par, first the event then the action performed
document.querySelector('.btn-roll').addEventListener('click', function(){
    var dice = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector('.dice');
    
    //display the selection
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    if( dice !== 1 ){
        
        roundScores += dice;
        // id is written this way so the content can be updated
        // based on the payer, playing 
        document.getElementById('current-' + activePlayer).innerHTML = '<em>' + roundScores + '</em>';
    } else{
        
        roundScores = 0;
        dice = 0;
        document.getElementById('current-' + activePlayer).innerHTML = '<em>' + roundScores + '</em>';
        
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        
        //toggle active user graphic when user changes 
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        roundScores += dice;

    }
    
});




