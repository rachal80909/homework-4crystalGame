var yourScore = $(".yourScore");
var winsAndLosses = $(".winsAndLosses");



//var yourScore = getElementById(red, blue, yellow, green.onclick(math.sum));
var wins = 0;
var losses = 0;
var currentScore = 0;


//TODO: make sure random value will be between 19-120
function printWinsAndLosses() {
    winsAndLosses.html(`<h4>Wins: ${wins}</h4><h4>Losses: ${losses}</h4>`);
}
printWinsAndLosses();






var targetScore = $("#numberToGuess");
var targetScoreVal = getRandomValue();
targetScore.html(targetScoreVal);




var red = $("#red");
//red.setAttribute("value", "5");

var blue = $("#blue")
    //console.log(blue.value);

var yellow = $("#yellow");
//console.log(yellow.value);

var green = $("#green");
//console.log(green.value);

//sets random number for each crystal.  Saved in their data-value attribute.
for (var i = 0; i < 4; i++) {
    var keys = [red, blue, yellow, green];
    var rand = Math.floor((Math.random() * 25) + 1);
    keys[i].attr('data-value', rand);
    console.log(rand);
}


// add an event listener to elements
// red.on('click', function() {
//     //this refers to red
//     var click = red.attr('data-value');
//     addToScore(click);
//     checkPlayerScore();
// });

// blue.on('click', function() {
//     // this refers to blue
//     var click = blue.attr('data-value');
//     addToScore(click);
//     checkPlayerScore();
// });

// yellow.on('click', function() {
//     // this refers to yellow
//     var click = yellow.attr('data-value');
//     addToScore(click);
//     checkPlayerScore();
// });

// green.on('click', function() {
//     // this refers to green
//     var click = green.attr('data-value');
//     addToScore(click);
//     checkPlayerScore();
// });




$(".crystal").on("click", function() {
    var click = $(this).attr('data-value');
    addToScore(click);
    checkPlayerScore();
})





function getRandomValue() {
    return Math.floor((Math.random() * 120) + 1);

}

function addToScore(click) {
    console.log(`Current Score: ${currentScore} + Crystal Click: ${click}`);
    currentScore += parseInt(click);
    yourScore.html(currentScore);
}

function resetGame() {
    currentScore = 0;
    yourScore.html(currentScore);
    targetScoreVal = getRandomValue();
    targetScore.html(targetScoreVal);
}

function checkPlayerScore() {
    //yourScore, targetScore (parseFloat() is for decimals)
    if (targetScoreVal === currentScore) {
        alert('You win!');
        wins++;
        printWinsAndLosses();
        resetGame();
    } else if (currentScore > targetScoreVal) {
        alert('You lose.');
        losses++;
        printWinsAndLosses();
        resetGame();
    }
}