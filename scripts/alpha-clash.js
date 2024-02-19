// function play(){
//     //step 1: hide the home screen.to hide the home screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection);


//     //show the playground
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
//     // console.log(playGroundSection.classList);
// }

function handleKeyPress(event){
    const playerPress = event.key;

    console.log('player pressed', playerPress);

    //stop the game if pressed 'Esc'
    if(playerPress === 'Escape'){
       gameOver();
    }

    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPress, expectedAlphabet);


    //check matched or not
if(playerPress === expectedAlphabet){
    console.log('you get a point');


    const currentScore = getTextElementValueById('current-score');
    console.log(currentScore);
    const updatedScore = currentScore + 1;
    setTextElementValueById('current-score', updatedScore);

    //update score:
    //1. get the current score 
    // const currentScoreElement = document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // console.log(currentScore);
    


    //2.increase the score by 1
    // const newScore = currentScore + 1;
    // //3. show the updated score 
    // currentScoreElement.innerText = newScore;


    // //4. start a new round
    // console.log('you have pressed correctly', expectedAlphabet);
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
}
else{
    console.log('you lost a life');

    const currentLife = getTextElementValueById('current-life');
    const updatedLife = currentLife - 1;
    setTextElementValueById('current-life', updatedLife);


    if(updatedLife === 0){
        gameOver();
    }
    //step 1: get the current life number
    // const currentLifeElement = document.getElementById('current-life');
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    

    //step 2: reduce the life count
    // const newLife = currentLife - 1;

    // //step 3: display the updated life count
    // currentLifeElement.innerText = newLife;
}
}



//capture keyboard keypress
document.addEventListener('keyup', handleKeyPress)

function continueGame(){
    //step 1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    // console.log('Your random alphabet:', alphabet);

    //set a randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color
    setBackgroundColorById(alphabet);
}


function play(){
    //hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('play-score');
    showElementById('play-ground');

    //reset score and life 
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();

}

function gameOver(){
    hideElementById('play-ground');
    showElementById('play-score');
    //update final score 
    // 1. get the final score 
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    //clear the last selected alphabet hightlight
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}