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
    // console.log('player pressed', playerPress);

    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPress, expectedAlphabet);


    //check matched or not
if(playerPress === expectedAlphabet){
    console.log('you get a point');
    //update score:
    //1. get the current score 
    const currentScoreElement = document.getElementById('current-score');
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    console.log(currentScore);


    //2.increase the score by 1
    const newScore = currentScore + 1;
    //3. show the updated score 
    currentScoreElement.innerText = newScore;


    //4. start a new round
    console.log('you have pressed correctly', expectedAlphabet);
    removeBackgroundColorById(expectedAlphabet);
    continueGame();
}
else{
    console.log('you lost a life');
    //step 1: get the current life number
    const currentLifeElement = document.getElementById('current-life');
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);
    

    //step 2: reduce the life count
    const newLife = currentLife - 1;

    //step 3: display the updated life count
    currentLifeElement.innerText = newLife;
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
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();

}