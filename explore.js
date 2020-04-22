var i= 0;
var txt = "Oh no! It's starting to get dark and Squirrel is nowhere to be found! Look around the woods for clues, maybe someone knows where he went! *HINT* investigate the sparkles!!! maybe they can lead you in the right direction...";
var speed = 50;
var possumIter = 1;

const theButton = document.querySelector(".startButton");
const thePossumButton = document.querySelector(".type1");
const theFairyButton = document.querySelector(".type2");

let theTextBox = document.querySelector("#opacity");
let thePossumSpeech = document.querySelector("#opposum");
let theFairySpeech1 = document.querySelector("#fairy1");
let theFairyImage1 = document.querySelector("#fairyone");
let theText = document.querySelector("#demo");

theButton.addEventListener("click", isClicked);
thePossumButton.addEventListener("mouseover", possumTalking);
theFairyButton.addEventListener("click", fairyClick);

function possumTalking() {
    thePossumSpeech.style.display= "block";
    setTimeout(function() {
        thePossumSpeech.style.display="none";}, 5000);
}

function isClicked() {
    theTextBox.style.backgroundColor="white";
    theTextBox.style.opacity = '0.5';
    theText.style.opacity = 100
}

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;

        setTimeout(typeWriter, speed);
    }
    console.log('click!');
}

function fairyClick() {
    theFairySpeech1.style.display = "block";
    theFairyImage1.style.display = "block";
    setTimeout(function() {
        theFairySpeech1.style.display= "none";}, 5000);
    setTimeout(function() {
        theFairyImage1.style.display= "none";}, 5000);
}