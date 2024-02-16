function hideElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}
function showElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}
// key bord color set
function setBacgroundColorId(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400')
}
// key bord color remove
function removeBacgroundColorId(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('bg-orange-400')
}

// wrong key pressed color set
function wrongKeyBacgroundColorId(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bg-red-800')
}
// wrong key pressed  after riht key color set
function wrongKeyAfterBacgroundColorId(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('bg-red-800')
}
// game score access 
function getTextElementValueById(elementId){
    const element =document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}
// game score value access
function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

// current alphabet access
function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText.toLocaleLowerCase();
    return text;

}


function getARandomAlphabet(){
    // get or creat alphabet arry
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('');
    // console.log(alphabets)
    // get a random index between 0-225
    const rendomNumber = Math.random()*25;
    const index = Math.round(rendomNumber)
    const alphabet = alphabets[index]
    // console.log(index ,alphabet)
    return alphabet
}