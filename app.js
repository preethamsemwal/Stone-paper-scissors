let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.getElementById("msg");
const userScoreValue=document.getElementById("user-score");
const compScoreValue=document.getElementById("comp-score");

const drawMatch=()=>{
    msg.textContent="Draw Match Try Again"
    msg.style.backgroundColor="#141929";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userscore++;
        userScoreValue.textContent=userscore;
        msg.textContent=`You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compScoreValue.textContent=compscore;
        msg.textContent=`You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const playGame = (userChoice) => {
    console.log("user have clicked=",userChoice)
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("computer have clicked=",compChoice)
    if(userChoice===compChoice){
        drawMatch();
    }else{
        let userWin=true
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
        
    });
});
