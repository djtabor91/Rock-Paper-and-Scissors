

function computerPlay(){
    let n = Math.random().toFixed(2);
    if(n <= .33){
        return 'rock'
    }else if(n <= .66){
        return 'scissor'
    }else if(n >= .66){
        return 'paper'
    }
    return n
}

function playRound(playerSelection, computerSelection){
    playerSelection =playerSelection.toLowerCase();
    if(playerSelection === computerSelection){
        return 'Draw!'
    }else if(playerSelection === 'scissor' && computerSelection === 'paper' || playerSelection === 'rock' && computerSelection === 'scissor' || playerSelection === 'paper' && computerSelection === 'rock'){
        return 'Player Wins!'
    }else{
        return 'Computer Wins!'
    }
}
const playerSelection = computerPlay();
const computerSelection = computerPlay();
console.log(playerSelection)
console.log(computerSelection)

console.log(playRound(playerSelection, computerSelection));


