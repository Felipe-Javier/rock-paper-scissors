/* Definimos las variables a utilizar */
let result = null
let playerCount = 0
let computerCount = 0
let playerWin = 'Player wins ✔'
let tie = 'It is a tie 🤔'
let computerWin = 'Machine wins ❌'

/* Funcion que obtiene la eleccion de la computadora y del jugador, ademas permite saber quien gano la ronda */
const game = () => {

    /* La computadora elige aleatoriamente un numero entre 1 y 3, de acuerdo a su valor le asignamos Rock o Paper o Scissors */
    const getComputerChoice = () => {
        let random = Math.floor(Math.random() * 3) + 1;
        let computerPick = null
    
        if (random === 1){
            computerPick = 'rock'
        } else if (random === 2){
            computerPick = 'paper'
        } else {
            computerPick = 'scissors'
        }
    
        return computerPick
    }
    
    /* El jugador escribe su opcion para jugar, se transforman las letras a minusculas y se verifica que ingrese una opcion correcta*/
    const getPlayerChoice = () => {
        let playerPick = prompt('Choice, Rock - Paper - Scissors ').toLowerCase()
    
        if (playerPick != 'rock' && playerPick != 'paper' && playerPick != 'scissors') {
            alert('Enter a valid choice: rock, paper, scissors')
            return getPlayerChoice()
        }
    
        return playerPick
    }
    

    let computer = getComputerChoice()
    let player = getPlayerChoice()

    /* Se muestra la eleccion del jugador, de la computadora y el resultado del juego */
    const playRound = (player, computer) => {
    
        console.log(`la computadora elige: ${computer}`)
        console.log(`el player elige: ${player}`)
    
        if (player === computer) {
            result = tie
            alert(tie)
            console.log(tie)
    
        } else if ( player === 'rock' && computer === 'paper' || 
                    player === 'paper' && computer === 'scissors' || 
                    player === 'scissors' && computer === 'rock'){
            result = computerWin
            alert(computerWin)
            console.log(computerWin)
    
        } else {
    
            result = playerWin
            alert(playerWin)
            console.log(playerWin)
    
            return result
        }
    }

    playRound(player, computer)
}




/* Ciclo para ejecutar el juego 5 veces y el contador de rondas ganadas*/
for (let i = 0; i <= 4; i++) {
    game()

    if (result == playerWin) {
        playerCount += 1
    } else if (result == computerWin) {
        computerCount += 1
    }
    
    console.log(` Player: ${playerCount} \n Computer: ${computerCount}`)
}

/* Alerta que muestra si gano el jugador o la computadora o si fue empate*/
if (playerCount > computerCount) {
    alert('Congratulations, you won 🥳')
} else if (computerCount > playerCount){
    alert('Sorry, machine won 🤡')
} else {
    alert('Tie 🙄')
}

