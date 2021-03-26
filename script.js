let number = Math.ceil(Math.random() *20)
let message = document.getElementById("message")
function checkNumber(){
    let highScore = parseInt(document.getElementById("high-score").innerHTML)
    let score = parseInt(document.getElementById("score").innerHTML)
    let inputNumber = (document.getElementById("input-box").value)
    if(parseInt(inputNumber) === number){
        message.textContent = "🎉 Correct Number!"
        document.getElementById("high-score").innerHTML = Math.max(highScore,score)
        document.getElementById("check-button").disabled = true
        document.getElementById("again-button").disabled = false
        document.getElementById("number").textContent = inputNumber
        document.body.style.background = "green";
    }else if (inputNumber == ""){
        message.textContent = "⛔️ No number!"
    }else if (parseInt(inputNumber) > number){
        message.textContent = "📈 Too high!"
        score--
    }else{
        message.textContent = "📉 Too low!"
        score--
    }
    document.getElementById("score").innerHTML = score
    if(score === 0){
        message.textContent = "💥 You lost the game!"
        document.getElementById("check-button").disabled = true
        document.getElementById("again-button").disabled = false
        return;
    }
}

function playAgain(){
    number = Math.ceil(Math.random() *20)
    message.textContent = "Start guessing..."
    document.getElementById("input-box").value = "";
    document.getElementById("number").textContent = "?"
    document.getElementById("score").innerHTML = "20"
    document.body.style.backgroundColor = 'rgb(' + 41 + ',' + 41 + ',' + 41 + ')';
    document.getElementById("check-button").disabled = false
    document.getElementById("again-button").disabled = true
}