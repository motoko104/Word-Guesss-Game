//let alphabet = [ a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z];
let wordBank = [ "Hyrule", "Zelda", "Kokiri", "Ganondorf", "Triforce", "Epona"];

let word = wordBank[Math.floor(Math.random() * wordBank.length)];
    for( let i=0; i< word.length; i++){
        let newList = document.createElement('li');
        let newBlank = document.createTextNode(word[i]);
        newList.appendChild(newBlank);
        var list = document.getElementsByClassName("word-area")[0];
        list.appendChild(newList);
    }

document.addEventListener("keyup",function(event){
   var userGuess = event.key;
   for( let i = 0; i != word.length(); i++){
       char c = s.charAt(i);
   }
   if (userGuess === word.indexOf(userGuess)){
       document.getElementsByTagName('li')

   };
   console.log(userGuess);
});


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