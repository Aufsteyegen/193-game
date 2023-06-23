/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function createGame(shuffledArray) {
    // array of objects, each containing one "true" country name (correct guess)
    // and two "false" country names (incorrect guess)
    let gameStages = []
    let countryGuesses = {"true":[], "false":[]}
    for (let i = 1; i <= shuffledArray.length; i++) {
        if (i % 3 == 0) {
            countryGuesses["true"].push(shuffledArray[i - 1])
            gameStages.push(countryGuesses)
            countryGuesses = {"true":[], "false":[]}
        }
        else {
            countryGuesses["false"].push(shuffledArray[i - 1])
        }
    }
    return gameStages
}

export { shuffleArray, createGame }
