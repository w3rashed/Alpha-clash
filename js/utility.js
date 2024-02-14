function hideElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden')
}
function showElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden')
}

function setBacgroundColorId(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bg-orange-400')
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