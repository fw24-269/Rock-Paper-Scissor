let userScore=0;
let compScore=0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let userScorePara= document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

let genCompChoice =()=>{
    let options = ["rock","paper","scissor"];
    let idx = Math.floor(Math.random()*3);
    return (options[idx]);
}


let drawGame = ()=> {
    msg.innerText = ("Game draw! Try again");
    msg.style.backgroundColor="grey";
}


let showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText= `You win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    } else {
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText= `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

let playGame = (userChoice) => {
    console.log("user choice=",userChoice);
    let compChoice= genCompChoice();
    console.log("comp choice=",compChoice);

    if(userChoice== compChoice) {
        drawGame();
    } else {
        let userWin=true;
        if(userChoice=="rock") {
            //paper,scissor
            userWin = (compChoice=="paper" ? false :true);
        } else if(userChoice == "paper") {
            //scissor,rock
            userWin = (compChoice=="scissor" ? false : true);
        } else {
                userWin = (compChoice=="rock" ? false :true);
            }
            showWinner(userWin, userChoice, compChoice);
        }
    }









