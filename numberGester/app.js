//Game value
let min = 1,
    max = 10,
    winningNum = getRandomNumber(min, max),
    guessesLeft = 3;

//UI elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

//asigne UI min and max min
minNum.textContent = min;
maxNum.textContent = max;

//Play again even listener
game.addEventListener('mousedown', function (e) {
    if (e.target.className === "play-again") {
        window.location.reload();
    }
});


//listen for guess
guessBtn.addEventListener('click', function () {

    let guess = parseInt(guessInput.value);
    //Game OVER  - won
    //validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please entera a number between ${min} and ${max}`, 'red');
    }

    //check if won
    if (guess === winningNum) {
        //Game Over won
        gameOver(true, `${winningNum} is correct!, YOU WIN`);

        // //disable input
        // guessInput.disabled = true;
        // //change border color
        // guessInput.style.borderColor = 'green';
        // //set message
        // setMessage(`${winningNum} is correct!`, 'green');

    } else {
        //Game over
        guessesLeft -= 1;
        if (guessesLeft === 0) {

            // //Game over LOST
            // guessInput.disabled = true;
            // //change border color
            // guessInput.style.borderColor = 'red';

            // //set message
            // setMessage(`Game over, you lost. The correct number was',${winningNum} !`, 'red');

            gameOver(false, `Game over, you lost. The correct number was', ${winningNum} !`);


        } else {
            //game continues  -answer wrong

            //change border color
            guessInput.style.borderColor = 'red';

            //clear input
            guessInput.value = '';

            //tell user its the wrong number 
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');

        }
    }
});
//Game over 
function gameOver(won, msg) {

    let color;
    won === true ? color = 'green' : color = 'red';


    //disable input
    guessInput.disabled = true;
    //change border color
    guessInput.style.borderColor = color;
    //Set color text
    message.style.color = color;
    //set message
    setMessage(msg);

    //Play Again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';

}

//get winning number
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//set Message
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}