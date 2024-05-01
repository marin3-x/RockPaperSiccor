let userScore = 0;
let compScore = 0;
const showUserScore = document.querySelector('#user-score');
const showCompScore = document.querySelector('#comp-score');
const msg = document.querySelector("#msg");
const choices = document.querySelectorAll('.choice');
const GencompChoice = () => {
   const options = ["rock","paper","scissors"];
   const randomIndex = Math.floor(Math.random() * 3);
   return options[randomIndex];

}
const drawGame = () => {
    console.log("game is a draw");
    msg.innerText = "Game is a draw";
}
const showwinner = (userWin) =>{
    if(userWin){
        console.log(`You are the winner`);
        userScore++;
        showUserScore.innerText = userScore;
        msg.innerText = "You Win";
    }else{
        console.log("Comp is the winner");
        compScore++;
        showCompScore.innerText = compScore;
        msg.innerText = "Computer Win";
    }
}
const playGame =((userChoice) => {
    console.log(userChoice);
   let compChoice = GencompChoice();
   console.log(compChoice);
   if(userChoice === compChoice){
    drawGame();
   }else{
    let userWin = true;
    if(userChoice === 'rock'){
        userWin = compChoice ==='paper' ? false : true;
    }else if(userChoice === 'paper'){
        userWin = compChoice === 'scissors' ? false : true;
    }else{
        userWin = compChoice ==='rock' ? false : true;
    }
    showwinner(userWin);
   }
   

});
choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
       const userChoice = choice.getAttribute("id") ;
       playGame(userChoice);
    });
});