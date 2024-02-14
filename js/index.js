// option -1: onclick hide and unhide 

// function play(){
//     //step-1: hide the home sscreen. to hide the screen add the class hidden to the home screen 
//     const homeSection =document.getElementById('home-screen');
//     homeSection.classList.add('hidden');


//     // show the playground section
//     const playGroundSection= document.getElementById('play-ground')
//     playGroundSection.classList.remove('hidden')

// }

function continueGame(){
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log(alphabet)
    const alphabetUpperCase = alphabet.toUpperCase()
    // step-2: set randomly generated alphabet to the screen show id
    const currentAlphabetElemt = document.getElementById('current-laphabet')
    currentAlphabetElemt.innerText = alphabetUpperCase;
    // set background color screen keyboard
    setBacgroundColorId(alphabet)
}
// option-2: hide and show
function play(){
hideElementById('home-screen')
showElementById('play-ground')
continueGame();
}