// Zelda Hangman Mechanics
// Global Variables
//
// set of words for the hangman game
let wordBank = ["hyrule", "zelda", "kokiri", "ganondorf", "triforce", "epona", "majora", "link"];
let usedWords = [];
// Initial counts at the beginning of the game
let wins;
let remainingGuesses;
//chooses random index from wordBank array on page load
let word = wordBank[Math.floor(Math.random() * wordBank.length)];
// every letter of the alphabet
let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// letters already guessed
let lettersUsed = [];

//****************************************************************************************** */
// These actions automatically start on page load.
function setUp() {
    //saves the initial word picked to the "used words" array
    usedWords.push(word);
    //creates the empty blanks to guess the word
    emptySpaces(word);
    //creates the pots that are associated with the letters to be guessed
    setupPots();
    //sets the initial score and guesses remaining
    setupScore();

}
// Creates the blanks for the chosen word
function emptySpaces(word) {
    // For each character of the chosen word,
    // a list item is created with the class as the letter and with no character in the element and is appended to the word-area class
    for (let i = 0; i < word.length; i++) {
        let newList = document.createElement('li');
        let newBlank = document.createTextNode('  ');
        newList.appendChild(newBlank);
        newList.setAttribute('class', `${word[i]}`);
        let list = document.getElementsByClassName("word-area")[0];
        list.appendChild(newList);
    }
}
// Sets up the pots
function setupPots() {
    // creates pots and hides the letters associated with each pot for the letters Guessed section
    for (let i = 0; i < alphabet.length; i++) {
        let newSpace = document.createElement('li');
        let newPot = document.createTextNode("  ");
        newSpace.appendChild(newPot);
        newSpace.setAttribute('class', `${alphabet[i]}`);
        let pots = document.getElementsByClassName("guessed-letters")[0];
        pots.appendChild(newSpace);
        newSpace.innerHTML = '<img src="assets/css/images/pot.png" class = "pots">';
    }
}
//sets up the initial score and number of guesses remaining
function setupScore() {
    wins = 0;
    remainingGuesses = word.length + 5;
    let ws = document.createTextNode(`${wins}`);
    let gl = document.createTextNode(`${remainingGuesses}`);
    let addWins = document.getElementsByClassName("wins");
    let addRemainGuess = document.getElementsByClassName("guesses-left");
    addWins[0].appendChild(ws);
    addRemainGuess[0].appendChild(gl);
}
//Checks users guess against the word and updates for each key press
function checkWord(guessedLetter) {
    if (remainingGuesses === 0) {
        restart();
    } else {
        guessed(guessedLetter);
    }
}
//checking on the guessed letter
function guessed(letter) {
    let wordArea = document.getElementsByClassName("word-area")[0];
    for (let i = 0; i < word.length; i++) {
        let wordLet = wordArea.getElementsByTagName('li')[i];
        let wordClass = wordLet.getAttribute('class');
        if (letter === wordClass) {
            correct(letter);
        } else {

        }
    }
}
//what to do when the letter guessed is within the word being guessed
function correct(letter) {
    let target = document.getElementsByClassName(`${letter}`);

}
function restart() {
    // function to reset the page, setting wins to 0, guesses back to length + 5, choosing a new word and displaying it, and having all pots be covered

}

//Invokes the set up function initially
setUp();
//when the first key is pressed the following happens 
document.addEventListener("keyup", function (event) {
    let userGuess = event.key;
    //"Press any key to get started!" text dissappears
    let start = document.getElementsByTagName('section');
    let txt = document.getElementsByClassName("Start");
    if (start[0].hasChildNodes) {
        start[0].removeChild(txt[0]);
    };
    //Checks if the letter is guessed correctly or incorrectly
    checkWord(userGuess);
})