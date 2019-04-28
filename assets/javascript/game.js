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
    remainingGuesses = word.length
}

function checkWord() {
    for (i = 0; i > word.length; i++) {
        if (userGuess === word[i]) {
            let insert = document.getElementsByClassName("word-area")[i];
            insert.innerHTML = '<h3>' + word[i] + '</h3>';
        }
        else {
            for (let a = 0; a > alphabet.length; a++) {
                if (userGuess === alphabet[a]) {
                    let smash = document.getElementsByClassName("guessed-letters")[a];
                    smash.innerHTML = alphabet[a];
                }
                else {
                    console.log("error");
                }
                document.getElementsByClassName("guesses-left").innerText = remainingGuesses;
                remainingGuesses--;
            }
        }
    }
}
function Win() {
    // function to check if all indexs of the word are revealed, if so user wins a point.
}
function Lose() {
    // function to check if user has lost all guesses before each word index is revealed
}
function reset() {
    // function to reset the page, setting wins to 0, guesses back to 7, choosing a new word and displaying it, and having all pots be covered
}
//This is when the game starts
function startGame() {
    //clears the word guess area if there was anything there before

}


//Invokes the set up function initially
setUp();
//when the first key is pressed the following happens 
document.addEventListener("keyup", function (event) {
    let userGuess = event.key;
    //"Press any key to get started!" text dissappears
    let removeStart = document.querySelectorAll('h3');
    let hide = removeStart[0];
    hide.className = 'hidePlay';

    checkWord();
})