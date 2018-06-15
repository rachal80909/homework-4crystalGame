var yourScore = $(".outcome")
    //var yourScore = getElementById(red, blue, yellow, green.onclick(math.sum));
var wins = 0;
var losses = 0;
var currentScore = 0;
//TODO: make sure random value will be between 19-120
yourScore.html(`<h4>Wins: ${wins}</h4><h4>Losses: ${losses}</h4>`);
var targetScore = $(".number");
var targetScoreVal = getRandomValue();
targetScore.html(targetScoreVal);
console.log('rand num', targetScore.text());

function addToScore(val) {
    currentScore += parseInt(val);
    $('.math').html(currentScore);
}

var red = $("#red");
//red.setAttribute("value", "5");
console.log(red.value);

var blue = $("#blue")
    //console.log(blue.value);

var yellow = $("#yellow");
//console.log(yellow.value);

var green = $("#green");
//console.log(green.value);
for (var i = 0; i < 4; i++) {
    var keys = [red, blue, yellow, green];
    var rand = Math.floor((Math.random() * 25) + 1);
    keys[i].attr('data-value', rand);
    console.log(rand);
}
// add an event listener to elements
red.on('click', function() {
    //this refers to red
    var click = red.attr('data-value');
    addToScore(click);
    checkPlayerScore();
});

//parseInt(42.01) => 42
//alert(parseInt('james')); // NaN (not a number)
// Cafe Del Mar ChillWave 2 :)
// .innerHTML returns a string, NaN

blue.addEventListener('click', function() {
    // this refers to blue
    addToScore(this.value);
    checkPlayerScore();
});

yellow.addEventListener('click', function() {
    // this refers to blue
    addToScore(this.value);
    checkPlayerScore();
});

green.addEventListener('click', function() {
    // this refers to blue
    addToScore(this.value);
    checkPlayerScore();
});
//var sum = parseInt(red.value) + parseInt(blue.value) + parseInt(yelow.value) + parseInt(green.value);

// console.log (sum);
function getRandomValue() {
    return Math.floor((Math.random() * 120) + 1);

}

function checkPlayerScore() {
    //yourScore, targetScore (parseFloat() is for decimals)
    if (targetScoreVal === currentScore) {
        alert('You win!');
    } else if (currentScore > targetScoreVal) {
        alert('You lose.');
    }
}

// console.log(getRandomValue(10, 4));

//make array of objects

// console.log(crystalsGuess[0].crystal1);