'use strict';

/*console.log(document.querySelector('.message'));//accesses the tag with class message

console.log(document.querySelector('.message').textContent);//accesses the textContent of that tag

//querySelector is the method of document object

//for CLASSES, '.classname' and for IDs, '#IDname'

document.querySelector('.message').textContent='START YOUR GUESS✨';

document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=20;

document.querySelector('.guess').value=23;

console.log(document.querySelector('.guess').value);*/

//NOTE: THE NO. GENERATED IS ALWAYS DIFF FROM PREVIOUS

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //function has been declared but not called as js engine itself calls it when the event happens

  //when there is no input given

  /*

//when guess is too high
else if(guess>secretNumber){
    if(score>1){
    // document.querySelector('.message').textContent='📈Too high!';
    displayMessage('📈Too high!');
    score--;
    document.querySelector('.score').textContent=score;
    }
    else{
        // document.querySelector('.message').textContent='🙍You have lost the game!';
        displayMessage('🙍You have lost the game!');
    }

    //when guess is too low
    }
    else if(guess<secretNumber){
        if(score>1){ 
        // document.querySelector('.message').textContent='📉Too low!'
        displayMessage('📉Too low!');
        score--;
        document.querySelector('.score').textContent=score;
    }
    else{
        // document.querySelector('.message').textContent='🙍You have lost the game!';
        displayMessage('🙍You have lost the game!');
    }
}


*/

  if (score > 1) {
    guess > secretNumber
      ? displayMessage('📈Too high!')
      : displayMessage('📉Too low!');
    score--;
    //when player wins
    if (!guess) {
      //document.querySelector('.message').textContent = 'No Number🚫';
      displayMessage('No number🚫');
    } else if (guess === secretNumber) {
      //  document.querySelector('.message').textContent = '🙌Correct Answer!';
      displayMessage('🙌Correct Answer!');
      document.querySelector('.number').textContent = secretNumber;

      document.querySelector('body').style.backgroundColor = '#60b347';
      //dot is used for classname not element name

      document.querySelector('.number').style.width = '30rem';
      //property value must be a string e.g. '30rem' or '#60b347'

      //setting highscore

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('🙍You have lost the game!');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  // document.querySelector('.message').textContent='Start guessing!';
  displayMessage('Start guessing!');
  document.querySelector('.guess').value = ''; //empty string means no value
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});