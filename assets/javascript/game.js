$(document).ready(function(){
// This declares all of my variables that will be used for the game
var rndNmbr = Math.floor(Math.random() * ((120 - 19)+1) + 19);
var wins = 0;
var losses = 0;
var c1 = Math.floor(Math.random() * 12 + 1);
var c2 = Math.floor(Math.random() * 12 + 1);
var c3 = Math.floor(Math.random() * 12 + 1);
var c4 = Math.floor(Math.random() * 12 + 1);
var total = 0;

//this is the random number that the user must equate to-----
$("#randomNumber").text(rndNmbr);
$(".yourscore").text(total);


// Wins,Losses, and Reset functions-----
function winner() {
    alert("Winner Winner Chicken Dinner!!!");
    wins++;
    $("#wins").text(wins);
    resetboy();
}

function wahwah() {
    alert("You Lose =(");
    losses++;
    $("#losses").text(losses);
    resetboy();
}

function resetboy() {
    rndNmbr = Math.floor(Math.random() * ((120 - 19)+1) + 19);
    console.log(rndNmbr);
    $("#randomNumber").text(rndNmbr);
    c1 = Math.floor(Math.random() * 12 + 1);
    c2 = Math.floor(Math.random() * 12 + 1);
    c3 = Math.floor(Math.random() * 12 + 1);
    c4 = Math.floor(Math.random() * 12 + 1);
    total = 0;
    $(".yourscore").text(total);

}

//these are the crystals that will be added to get to the random number-----
$(".c1").on("click",function() {
total = total + c1;
console.log("New total=" + total);
$(".yourscore").text(total);
if (total == rndNmbr) {
    winner();
}
else if (total > rndNmbr) {
    wahwah();
}
});

$(".c2").on("click",function() {
    total = total + c2;
    console.log("New total=" + total);
    $(".yourscore").text(total);
    if (total == rndNmbr) {
        winner();
    }
    else if (total > rndNmbr) {
        wahwah();
    }
});

$(".c3").on("click",function() {
    total = total + c3;
    console.log("New total=" + total);
    $(".yourscore").text(total);
    if (total == rndNmbr) {
        winner();
    }
    else if (total > rndNmbr) {
        wahwah();
    }
});

$(".c4").on("click",function() {
    total = total + c4;
    console.log("New total=" + total);
    $(".yourscore").text(total);
    if (total == rndNmbr) {
        winner();
    }
    else if (total > rndNmbr) {
        wahwah();
    }
});

});