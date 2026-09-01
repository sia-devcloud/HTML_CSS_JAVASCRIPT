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

function generateComputerChoice(){
  
}

let computerChoice;
//Enabling 'Ball' button
document.querySelector('.ball').addEventListener('click', function(){
  // console.log('You choose Ball');
  //Setting computer choice
  let randomNumber=Math.random()*3;
  // console.log(randomNumber);
  if(randomNumber>=0 && randomNumber<1){
    computerChoice='Stump';
    // console.log('Computer choose Stump');
  }
  else if(randomNumber>=1 && randomNumber<2){
    computerChoice='Ball';
    // console.log('Computer choose Ball');
  }
  else{
    computerChoice='Bat';
    // console.log('Computer choose Bat')
  }
//Finding the result
  let resultMsg;
  if(computerChoice==='Bat'){
    resultMsg="Computer won";
  }
  else if(computerChoice==='Ball'){
    resultMsg="It's a Tie";
  }
  else{
    resultMsg="You won";
  }
  //Displays the output in console
  console.log(`You choose Ball and Coumputer choose ${computerChoice} ${resultMsg}`)

  //Displays the output in Webpage pop up
  alert(`You choose Ball and Coumputer choose ${computerChoice} ${resultMsg}`)
});


////Enabling 'Bat' button
document.querySelector('.bat').addEventListener('click', function(){
  //Setting computer choice
  let randomNumber=Math.random()*3;
  if(randomNumber>=0 && randomNumber<1){
    computerChoice='Stump';
  }
  else if(randomNumber>=1 && randomNumber<2){
    computerChoice='Ball';
  }
  else{
    computerChoice='Bat'
  }

  //Finding result
  let resultMsg;
  if(computerChoice==='Ball'){
    resultMsg=`You won`;
  }
  else if(computerChoice==='Bat'){
    resultMsg=`It's a Tie`;
  }
  else{
    resultMsg='Computer won'
  }

  //Displays the output in console
  console.log(`You choose Bat and Computer choose ${computerChoice} ${resultMsg}`)

  //Displays the output in Webpage pop up
  alert(`You choose Bat and Coumputer choose ${computerChoice} ${resultMsg}`)
})

//Enabling stump button

document.querySelector('.stump').addEventListener('click', function(){
  //Setting computer choice
  let randomNumber=Math.random()*3;
  if(randomNumber>=0 && randomNumber<1){
    computerChoice='Stump';
  }
  else if(randomNumber>=1 && randomNumber<2){
    computerChoice='Ball';
  }
  else{
    computerChoice='Bat'
  }

  //Finding result
  let resultMsg;
  if(computerChoice==='Ball'){
    resultMsg=`Computer won`;
  }
  else if(computerChoice==='Bat'){
    resultMsg=`You won`;
  }
  else{
    resultMsg="It's a Tie";
  }

  //Displays the output in console
  console.log(`You choose Stump and Computer choose ${computerChoice} ${resultMsg}`)

  //Displays the output in Webpage pop up
  alert(`You choose Stump and Coumputer choose ${computerChoice} ${resultMsg}`)
})
