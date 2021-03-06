let playerScore = 0
let cpuScore = 0
let alertsOn = true

function play(playerChoice) {
    let cpuChoice = randomChoice()
    document.getElementById("playerChoiceArea").innerHTML = playerChoice
    document.getElementById("cpuChoiceArea").innerHTML = cpuChoice
    document.getElementById("resultArea").innerHTML = determineWinner(playerChoice, cpuChoice)
    document.getElementById("playerScore").innerHTML = "" + playerScore
    document.getElementById("cpuScore").innerHTML = "" + cpuScore
    document.getElementById("resultArea").className = ""
    document.getElementById("resultArea").classList.add("font-" + Math.floor(Math.random() * 8))
    document.getElementById("resultArea").style.color = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")"
}
function randomChoice() {
    let cpuChoice
    let rand = Math.random()*10
    if (rand <= 3.333) {
        cpuChoice = "Rock"
    } else if (rand > 3.333 && rand <= 6.666) {
        cpuChoice = "Paper"
    } else {
        cpuChoice = "Scissors"
    }
    return cpuChoice
}
function determineWinner(playerChoice, cpuChoice) {
    
    let resultText
    switch (playerChoice) {
        case cpuChoice:
            resultText = "Tied. Play again?"
            break;
        case "Rock":
            if (cpuChoice == "Scissors") {
                resultText = "You won! Play again?"
                playerScore++
                resultAlert("You won! Play again?")
            } else {
                resultText = "You lost... Try again?"
                cpuScore++
                resultAlert("You lost... Try again?")
            }
            break;
        case "Paper":
            if (cpuChoice == "Rock") {
                resultText = "You won! Play again?"
                playerScore++
                resultAlert("You won! Play again?")
            } else {
                resultText = "You lost... Try again?"
                cpuScore++
                resultAlert("You lost... Try again?")
            }
            break;
        case "Scissors":
            if (cpuChoice == "Paper") {
                resultText = "You won! Play again?"
                playerScore++
                resultAlert("You won! Play again?")
            } else {
                resultText = "You lost... Try again?"
                cpuScore++
                resultAlert("You lost... Try again?")
            }
            break;
        default:
            resultText = "Error"
    }
    return resultText
}
function resultAlert(alertMessage) {
    if (alertsOn) {
        alert(alertMessage)
    }
}
function toggleAlerts() {
    if (alertsOn) {
        alertsOn = false
        document.getElementById("toggleAlertsButton").innerHTML = "Alerts Off"
        document.getElementById("toggleAlertsButton").classList.remove("btn-primary")
        document.getElementById("toggleAlertsButton").classList.add("btn-danger")
    } else {
        alertsOn = true
        document.getElementById("toggleAlertsButton").innerHTML = "Alerts On"
        document.getElementById("toggleAlertsButton").classList.remove("btn-danger")
        document.getElementById("toggleAlertsButton").classList.add("btn-primary")
    }
}