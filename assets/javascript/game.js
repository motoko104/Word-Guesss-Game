// Zelda Hangman Mechanics
// set of words for the hangman game
let wordBank = [ "Hyrule", "Zelda", "Kokiri", "Ganondorf", "Triforce", "Epona","Majora"];

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

//when the first key is pressed the following happens 
document.addEventListener("keyup",function(event){
   let userGuess = event.key; 
   //"Press any key to get started!" text dissappears
    let removeStart = document.querySelectorAll('h3');
    let hide = removeStart[0];
    hide.className = 'hidePlay';

    //did user input an alphabetic letter?
    for(let i = 0; i < alphabet.length; i++){
        if( userGuess === alphabet[i]){
           document.getElementsByTagName('li').classList.remove('pots');
            let newView = document.createTextNode(alphabet[i]);
            newSpace.parentNode.removeChild(newSpace);
            let reveal = document.createElement('li');
            reveal.appendChild(newView);
            newSpace.innerHTML = '<h5 class = "revealed"' + userGuess + '</h5>';

           /* let reveal = document.getElementsByClassName('pots')[i];
            while(reveal.hasChildNodes()){
                reveal.removeChild(reveal.firstChild);*/
            }
        }
    })
    /*if(userGuess === alphabet.every(function (a){
        return a > 0;
    })){
        for( userGuess === word.every(function (w){
            let visiblity = document.getElementsByClassName("pots");
            visibility.innerHTML = visibility.innerHTML.replace(/<img src="assets/css/images/pot.png" class = "pots"/g,"<h5 class = "reveal">" + usereGuess + " </h5>");

        }))
    }*

   /*for( let i = 0; i != word.length(); i++){
       char c = s.charAt(i);
   }
   if (userGuess === word.indexOf(userGuess)){
       document.getElementsByTagName('li')

   };
   console.log(userGuess);
});*/

//
/*if(userGuess === word[""]){
        let correct = document.getElementsByClassName("word-area");
        correct.className = 'correct';
    };*/


// have multiple words that can be guessed at. starting as blank spaces and slowly revealed as letters are guessed
//Removes "Press any key to get stared" text when first key is pressed
//document.getElementsByClassName("Start").onkeyup = function(){
//    document.getElementsByTagName("h3").style.color = "black";
//};
// Chooses which word is going to be guessed//
/*for( let i = 0; i < word.length; i++){
    var currentWord = word;
    for (let w = 0; w < currentWord.length; i++){
        let wordLett = word.toCharArray();
        console.log(wordLett);
    }
    switch(String.fromCharCode(event.keyCode)){
        case (String.fromCharCode(event.keyCode)=== alphabet[]):

    }
    if(String.fromCharCode(event.keyCode)=== alphabet[]){
        
    if else(String.fromCharCode(event.keyCode)=== );{
    };
}

var el = document.getElementsByClassName("word-area");
el.addEventListener('keyup', play());

}*/

//let currentWord = word.replace(/\s/g, " ");
//document.querySelector(".word-area").innerHTML = currentWord;


//Writes wodrd to webpage//

//show pots and as each letter is guessed, a pot will break and show the letter that was typed/ letter that has already been guessed
//var el = document.getElementsByClassName('Letters');
//el.addEventListener('keyup', charCount,false);
//let alphabet = [ a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];

/*for(let i = 0; i < currentWord.length; i++){
   let newChara =  document.createElement('li');
   let newSpace = document.createTextNode("Hello");
   newChara.appendChild(newSpace);
   let position = document.getElementsByClassName("guess-area");
   position.appendChild(newChara);
}*/



//update wins as words are guessed correctly

//show how many guesses are remaining