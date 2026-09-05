console.log('Welcome to JavaScript');

/*Game rule:
A choose Bat and B choose Ball--> A won(One with bat won)
A choose Bat and B choose Stump --> B won
A choose Bat and B choose Bat --> Tie
A choose Ball and B choose Ball--> Tie
A choose Ball and B choose Stump --> A won
A choose Ball and B choose Bat --> B won
A choose Stump and B choose Ball--> B won
A choose Stump and B choose Stump --> Tie
A choose Stump and B choose Bat --> A won
check
*/

// Function to generate computer choice
function generateComputerChoice(){
    let randomNumber=Math.random()*3;
  if(randomNumber>=0 && randomNumber<1){
    coumputerMove='Stump';
  }
  else if(randomNumber>=1 && randomNumber<2){
    coumputerMove='Ball';
  }
  else{
    coumputerMove='Bat';
  }
  return coumputerMove;
}

//Function to display message in console
function displayInConsole(userMove, coumputerMove, resultMsg){
  console.log(`You choose ${userMove} and Coumputer choose ${coumputerMove} ${resultMsg} ${score.displayScore()}`)
}

//Displays the output in Webpage pop up
function displayInWebpage(userMove, coumputerMove, resultMsg){
  alert(`You choose ${userMove} and Coumputer choose ${coumputerMove} ${resultMsg}  ${score.displayScore()}`);
}

//Object to store results

let score={
  win:0,
  lost:0,
  Tie:0,
  displayScore: function(){
    return `total win:${score.win} total lost:${score.lost} total Tie:${score.Tie}`
  }
}

//Function to generate result
function generateResult(userMove, coumputerMove){
  if(userMove==='Ball'){
      if(coumputerMove==='Bat'){
        score.lost++;
        return"Computer won";
  }
      else if(coumputerMove==='Ball'){
        score.Tie++;
        return"It's a Tie";
  }
      else{
        score.win++;
        return"You won";
  }
  }
  else if(userMove==='Bat'){
      if(coumputerMove==='Ball'){
          score.win++;
          return`You won`;
  }
      else if(coumputerMove==='Bat'){
        score.Tie++;
        return`It's a Tie`;
  }
      else{
        score.lost++;
        return'Computer won'
  }
  }
  else{
      if(coumputerMove==='Ball'){
        score.lost++;
        return`Computer won`;
  }
      else if(coumputerMove==='Bat'){
        score.win++;
        return`You won`;
  }
      else{
        score.Tie++;
        return"It's a Tie";
  }
  }
}
  
document.querySelector('.ball').addEventListener('click', function(){
  //Setting computer choice
   let coumputerMove=generateComputerChoice();
   
  //Finding the result
   let resultMsg=generateResult('Ball', coumputerMove);

  //Displaying result
   let resultConsole=displayInConsole('Ball', coumputerMove, resultMsg);
   let resultWebpage=displayInWebpage('Ball', coumputerMove, resultMsg);

});

////Enabling 'Bat' button
document.querySelector('.bat').addEventListener('click', function(){
  //Setting computer choice
  let coumputerMove=generateComputerChoice();

  //Finding result
  let resultMsg=generateResult('Bat', coumputerMove);

  //Displaying result
  let resultConsole=displayInConsole('Bat', coumputerMove, resultMsg);
   let resultWebpage=displayInWebpage('Bat', coumputerMove, resultMsg);
})

//Enabling stump button

document.querySelector('.stump').addEventListener('click', function(){
  //Setting computer choice
  let coumputerMove=generateComputerChoice();

  //Finding result
  let resultMsg=generateResult('Stump', coumputerMove);

  //Displaying result
  let resultConsole=displayInConsole('Stump', coumputerMove, resultMsg);
  let resultWebpage=displayInWebpage('Stump', coumputerMove, resultMsg);
})
