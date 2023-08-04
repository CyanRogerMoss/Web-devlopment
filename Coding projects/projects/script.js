// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Get the necessary elements
const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const result = document.getElementById("result");

// Event listener for the guess button
guessButton.addEventListener("click", function() {
    // Get the user's guess from the input field
    const userGuess = parseInt(guessInput.value);

    // Compare the user's guess with the random number
    if (userGuess === randomNumber) {
        result.textContent = "Congratulations! You guessed the correct number!";
        result.style.color = "green";
        guessInput.disabled = true;
        guessButton.disabled = true;
    } else if (userGuess < randomNumber) {
        result.textContent = "Too low! Try again.";
        result.style.color = "red";
    } else if (userGuess > randomNumber) {
        result.textContent = "Too high! Try again.";
        result.style.color = "red";
    }

    // Clear the input field for the next guess
    guessInput.value = "";
});
