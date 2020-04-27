var i= 0;
var txt = "Oh no! It's starting to get dark and Squirrel is nowhere to be found! Look around the woods for clues, maybe someone knows where he went! *HINT* investigate the sparkles!!! maybe they can lead you in the right direction...";
var speed = 50;
var possumIter = 1;

const theButton = document.querySelector(".startButton");
const thePossumButton = document.querySelector(".type1");
const theFairyButton1 = document.querySelector(".button1");
const theFairyButton2 = document.querySelector(".button2");
const theFairyButton3 = document.querySelector(".button3");
const theFairyButton4 = document.querySelector(".button4");
const theFairyButton5 = document.querySelector(".button5");
const theFairyButton6 = document.querySelector(".button6");
const theFairyButton7 = document.querySelector(".button7");

let theTextBox = document.querySelector("#opacity");
let thePossumSpeech = document.querySelector("#opposum");
let theFairySpeech1 = document.querySelector("#fairy1");
let theFairyImage1 = document.querySelector("#fairyone");
let theFairySpeech2 = document.querySelector("#fairy2");
let theFairyImage2 = document.querySelector("#fairytwo");
let theFairySpeech3 = document.querySelector("#fairy3");
let theFairyImage3 = document.querySelector("#fairythree");
let theFairySpeech4 = document.querySelector("#fairy4");
let theFairyImage4 = document.querySelector("#fairyfour");
let theFairySpeech5 = document.querySelector("#fairy5");
let theFairyImage5 = document.querySelector("#fairyfive");
let theFairySpeech6 = document.querySelector("#fairy6");
let theFairyImage6 = document.querySelector("#fairysix");
let theFairySpeech7 = document.querySelector("#fairy7");
let theFairyImage7 = document.querySelector("#fairyseven");
let theArrows = document.querySelector(".arrow");
let theText = document.querySelector("#demo");

theButton.addEventListener("click", isClicked);
thePossumButton.addEventListener("mouseover", possumTalking);
theFairyButton1.addEventListener("click", fairyClick1);
theFairyButton2.addEventListener("click", fairyClick2);
theFairyButton3.addEventListener("click", fairyClick3);
theFairyButton4.addEventListener("click", fairyClick4);
theFairyButton5.addEventListener("click", fairyClick5);
theFairyButton6.addEventListener("click", fairyClick6);
theFairyButton7.addEventListener("click", fairyClick7);

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

function fairyClick1() {
    theFairySpeech1.style.display = "block";
    theFairyImage1.style.display = "block";
    setTimeout(function() {
        theFairySpeech1.style.display= "none";}, 5000);
    setTimeout(function() {
        theFairyImage1.style.display= "none";}, 5000);
}

function fairyClick2() {
    theFairySpeech2.style.display = "block";
    theFairyImage2.style.display = "block";
    setTimeout(function() {
        theFairySpeech2.style.display= "none";}, 5000);
    setTimeout(function() {
        theFairyImage2.style.display= "none";}, 5000);
}

function fairyClick3() {
    theFairySpeech3.style.display = "block";
    theFairyImage3.style.display = "block";
    setTimeout(function() {
        theFairySpeech3.style.display= "none";}, 5000);
    setTimeout(function() {
        theFairyImage3.style.display= "none";}, 5000);
}

function fairyClick4() {
    theFairySpeech4.style.display = "block";
    theFairyImage4.style.display = "block";
    setTimeout(function() {
        theFairySpeech4.style.display= "none";}, 5000);
    setTimeout(function() {
        theFairyImage4.style.display= "none";}, 5000);
}

function fairyClick5() {
    theFairySpeech5.style.display = "block";
    theFairyImage5.style.display = "block";
    setTimeout(function() {
        theFairySpeech5.style.display= "none";}, 5000);
    setTimeout(function() {
        theFairyImage5.style.display= "none";}, 5000);
}

function fairyClick6() {
    theFairySpeech6.style.display = "block";
    theFairyImage6.style.display = "block";
    setTimeout(function() {
        theFairySpeech6.style.display= "none";}, 5000);
    setTimeout(function() {
        theFairyImage6.style.display= "none";}, 5000);
}

function fairyClick7() {
    theFairySpeech7.style.display = "block";
    theFairyImage7.style.display = "block";
    theArrows.style.display = "block";
    setTimeout(function() {
        theFairySpeech7.style.display= "none";}, 5000);
    setTimeout(function() {
        theFairyImage7.style.display= "none";}, 5000);
}