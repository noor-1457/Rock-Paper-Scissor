let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

// generating computer choice
    const genCompChoice = () =>{
    const options = ['rock', 'paper', 'scissor'];
    const rndIdx = Math.floor(Math.random()*3);
     return options[rndIdx];
    }
// generating Results also manipulating DOM

const showWinner = (userWin, userChoice, compChoice) =>{
if(userWin){
     userScore++;
     userScorePara.innerText=userScore;
    msg.innerText=`You Win ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor= "green"
}else{
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText=`You Lose! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor= "red"
}}
const drawGame =()=>{
        msg.innerText="Game is draw!";
        msg.style.backgroundColor= "yellow"
}

// playing game function
const playGame = (userChoice) => {
 const compChoice = genCompChoice();

  if(userChoice === compChoice){
    drawGame();
  }else {let userWin = true;
  if(userChoice === "rock"){
    // scissor, paper
    userWin= compChoice === 'paper'? false : true
  } else if(userChoice === "paper"){
    //scissor, rock
    userWin= compChoice === 'scissor'? false : true
  } else {
    // paper, rock
    userWin= compChoice === 'rock'? false : true
  }
  showWinner(userWin, userChoice, compChoice);
}};
 
// getting user choice 

choices.forEach((choice) => {
        choice.addEventListener("click",()=>{
            const userChoice = choice.getAttribute("id");
            playGame(userChoice);
        })
    });
    

    