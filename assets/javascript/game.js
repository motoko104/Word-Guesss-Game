// Zelda Hangman Mechanics
// set of words for the hangman game
let wordBank = [ "Hyrule", "Zelda", "Kokiri", "Ganondorf", "Triforce", "Epona", "Majora", "Link"];
// Initial counts at the beginning of the game
let wins = 0;
let remainingGuesses = 7;
//chooses random index from wordBank array, then for every character that string array item has, a list item is created with no character in the element and is appended to the word-area class 
let word = wordBank[Math.floor(Math.random() * wordBank.length)];
        for( let i=0; i< word.length; i++){
            let newList = document.createElement('li');
            let newBlank = document.createTextNode('  ');
            newList.appendChild(newBlank);
            let list = document.getElementsByClassName("word-area")[0];
            list.appendChild(newList);
        }
 // creates pots and hides the letters associated with each pot for the letters Guessed section
let alphabet = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        for (let i = 0; i < alphabet.length; i++){
            let newSpace = document.createElement('li');
            let newPot = document.createTextNode("  ");
            newSpace.appendChild(newPot);
            let pots = document.getElementsByClassName("guessed-letters")[0];
            pots.appendChild(newSpace);
            newSpace.innerHTML = '<img src="assets/css/images/pot.png" class = "pots">';
        }
function checkWord(){
    for( i = 0; i > word.length; i++){
        if (userGuess === word[i]){
            let insert = document.getElementsByClassName("word-area")[i];
            insert.innerHTML = '<h3>' + word[i] + '</h3>';
        }
        else{
            for( let a = 0 ; a > alphabet.length; a++){
                if (userGuess === alphabet[a]){
                    let smash = document.getElementsByClassName("guessed-letters")[a];
                    smash.innerHTML = alphabet[a];
                }
                else{
                    console.log("error");
                }
                document.getElementsByClassName("guesses-left").innerText = remainingGuesses;
                remainingGuesses--;
            }
        }
    }
}
function Win(){
    // function to check if all indexs of the word are revealed, if so user wins a point.
}
function Lose(){
    // function to check if user has lost all guesses before each word index is revealed
}
function reset(){
    // function to reset the page, setting wins to 0, guesses back to 7, choosing a new word and displaying it, and having all pots be covered
}
console.log(word);
console.log(alphabet);
//when the first key is pressed the following happens 
document.addEventListener("keyup",function(event){
   let userGuess = event.key; 
   //"Press any key to get started!" text dissappears
    let removeStart = document.querySelectorAll('h3');
    let hide = removeStart[0];
    hide.className = 'hidePlay';

    checkWord();
    })