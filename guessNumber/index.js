let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
const resetButton = document.getElementById('resetButton');

let guessCount = 1;


guessField.focus();

function checkGuess() {
    const userGuess = Number(guessField.value);

    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }

    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = 'Yayy! you got it';
        lastResult.style.backgroundColor = 'green';
        lowOrHigh.textContent = '';
        setGameOver();
    } else if (guessCount === 10) {
        lastResult.textContent = 'Better luck next time! Play again';
        lowOrHigh.textContent = '';
        setGameOver();
    } else {
        lastResult.textContent = "Wrong! Try again";
        lastResult.style.backgroundColor = 'red';
        if (userGuess > randomNumber) {
            lowOrHigh.textContent = 'Last guess was high';
        }
        if (userGuess < randomNumber) {
            lowOrHigh.textContent = 'Last guess was low';
        }

    }

    guessCount++;
    guessField.value = '';
    guessField.focus();

}

guessSubmit.addEventListener('click', checkGuess);


function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    guessSubmit.classList.add('invisible');
    resetButton.classList.remove('invisible');
    resetButton.classList.add('visible');
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas p');

    for (const resetPara of resetParas) {
        resetPara.textContent = '';
    }

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(randomNumber);
    guessSubmit.classList.remove('invisible');
    guessSubmit.classList.add('visible');
    resetButton.classList.remove('visible');
    resetButton.classList.add('invisible');
}
