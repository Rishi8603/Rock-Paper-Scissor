// console.log("hi   ");

function getComputerChoice() {
  let computerChoice;
  let num = Math.random();

  if (num < 0.3) {
    computerChoice = "🪨";
  } else if (num >= 0.3 && num < 0.6) {
    computerChoice = "🧻";
  } else {
    computerChoice = "✂️";
  }

  // return the result so you can use it
  return computerChoice;
}

function getHumanChoice(humanchoice){
  document.getElementById("your-choice").textContent=humanchoice;
  let Cchoice = getComputerChoice();
  document.getElementById("computer-choice").textContent = Cchoice ;

  if(humanchoice=="🪨" && Cchoice=="🧻"){
    pointC++;
    document.getElementById("scoreC").textContent=pointC;
  }else if(humanchoice=="🪨" && Cchoice=="✂️"){
    pointH++;
    document.getElementById("scoreH").textContent=pointH;
  }else if(humanchoice=="🧻" && Cchoice=="🪨"){
    pointH++;
    document.getElementById("scoreH").textContent=pointH;
  }else if(humanchoice=="🧻" && Cchoice=="✂️"){
    pointC++;
    document.getElementById("scoreC").textContent=pointC;
  }else if(humanchoice=="✂️" && Cchoice=="🪨"){
    pointC++;
    document.getElementById("scoreC").textContent=pointC;
  }else if(humanchoice=="✂️" && Cchoice=="🧻"){
    pointH++;
    document.getElementById("scoreH").textContent=pointH;
  }

  if(pointC==5 || pointH==5) {
    //i want to reset the game...but will say who won
    if(pointC==5) alert("Computer Won");
    else alert("You Won");
    pointC = 0;
    pointH = 0;
    document.getElementById("scoreH").textContent=0;
    document.getElementById("scoreC").textContent=0;
  }
}
document.getElementById("rst").addEventListener("click",function(){
  pointC = 0;
  pointH = 0;
  document.getElementById("scoreH").textContent=0;
  document.getElementById("scoreC").textContent=0;
})
var pointC=0;
var pointH=0;
document.getElementById("rck").addEventListener("click",function(){
  getHumanChoice("🪨");
})
document.getElementById("ppr").addEventListener("click",function(){
  getHumanChoice("🧻");
})
document.getElementById("scsr").addEventListener("click",function(){
  getHumanChoice("✂️");
})


// let newScore=0;
// document.querySelector(".score").textContent = newScore;