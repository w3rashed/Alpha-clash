// option -1: onclick hide and unhide 

// function play(){
//     //step-1: hide the home sscreen. to hide the screen add the class hidden to the home screen 
//     const homeSection =document.getElementById('home-screen');
//     homeSection.classList.add('hidden');


//     // show the playground section
//     const playGroundSection= document.getElementById('play-ground')
//     playGroundSection.classList.remove('hidden')

// }

// function handleKeyboardKeyUpEvent(event){
//     const playerPressed = event.key;
    // const currentAlphabetElemt = document.getElementById('current-laphabet');
    // const currentAlphabet = currentAlphabetElemt.innerText.toLocaleLowerCase();
    // console.log(PlayerPressed, currentAlphabet)

    // // checked match or not
    // if(PlayerPressed ===currentAlphabet){
    //     console.log('you got a poind')
    // }else{
    //     console.log('you missed.you lost a life')
    // }
// }
// document.addEventListener('keyup',handleKeyboardKeyUpEvent)

document.addEventListener('keyup',function(event){

    const PlayerPressed = event.key;
    
    // get expected to press
    const currentAlphabetElemt = document.getElementById('current-laphabet');
    const currentAlphabet = currentAlphabetElemt.innerText.toLocaleLowerCase();
    // console.log(PlayerPressed, currentAlphabet)

    // checked match or not
    if(PlayerPressed === currentAlphabet){
        
        const currentScore = getTextElementValueById('current-score')
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore)
        // console.log(updatedScore)
        // ---------------------------------
        // update score
        // step-1:get the current score
        // const currentScoreElement= document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        
        // // step-2: increase the  score by 1
        // const newScore =currentScore + 1
        // // console.log(typeof currentScore)
        // // step-3: show the update score
        // currentScoreElement.innerText = newScore;
        // start a new round
        removeBacgroundColorId(currentAlphabet)
        wrongKeyAfterBacgroundColorId(currentAlphabet)
        continueGame();
        
    }else{
        wrongKeyBacgroundColorId(currentAlphabet)
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
            
        }
        // stop the game if pressed "esc"
        if (PlayerPressed ==='Escape'){
            gameOver()
        }


        // -------------------------------------
        // // step-1: get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = parseInt(currentLifeElement.innerText);
        // // step-2: reduced the life count 
        // const newLife = currentLifeText - 1;
        // // step-3:  set new life
        // currentLifeElement.innerText = newLife;
    }
})

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
    // hide everethin show only the playground
hideElementById('home-screen')
hideElementById('final-score')
showElementById('play-ground')
// reset score and life
setTextElementValueById('current-life',5)
setTextElementValueById('current-score',0)

continueGame();
}

function gameOver(){
    hideElementById('play-ground')
    showElementById('final-score')
    // update game scolre
    // 1. get the final score
    const lasScore = getTextElementValueById('current-score')
    setTextElementValueById('last-score',lasScore)
    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-laphabet');

    // console log chara problem hocche 
    // console.log(currentAlphabet)
    removeBacgroundColorId(currentAlphabet)
    wrongKeyAfterBacgroundColorId(currentAlphabet)
    // wrongKeyAfterBacgroundColorId(currentAlphabet)
    
}
