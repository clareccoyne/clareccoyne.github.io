var i= 0;
var txt = "Yay!! The friends are reunited!! Time to celebrate with their long awaited picnic :) ";
var speed = 50;
var possumIter = 1;

const theButton = document.querySelector(".startButton");
const thePossumButton = document.querySelector(".type1");
const theSheepButton = document.querySelector(".type2");
const theSquirrelButton = document.querySelector(".type3");
const theFoxButton = document.querySelector(".type4");
const theConfetti = document.querySelector(".fun");

let theTextBox = document.querySelector("#opacity");
let theText = document.querySelector("#demo");
let thePossumSpeech = document.querySelector("#opposumtalk");
let theSheepSpeech = document.querySelector("#sheeptalk");
let theSquirrelSpeech = document.querySelector("#squirreltalk");
let theFoxSpeech = document.querySelector("#foxtalk");

theButton.addEventListener("click", isClicked);
thePossumButton.addEventListener("mouseover", possumTalking);
theSheepButton.addEventListener("mouseover", sheepTalking);
theSquirrelButton.addEventListener("mouseover", squirrelTalking);
theFoxButton.addEventListener("mouseover", foxTalking);

function possumTalking() {
    thePossumSpeech.style.display= "block";
    setTimeout(function() {
        thePossumSpeech.style.display="none";}, 5000);
}

function sheepTalking() {
    theSheepSpeech.style.display= "block";
    setTimeout(function() {
        theSheepSpeech.style.display="none";}, 5000);
}

function squirrelTalking() {
    theSquirrelSpeech.style.display= "block";
    setTimeout(function() {
        theSquirrelSpeech.style.display="none";}, 5000);
}

function foxTalking() {
    theFoxSpeech.style.display= "block";
    setTimeout(function() {
        theFoxSpeech.style.display="none";}, 5000);
}


function isClicked() {
    theTextBox.style.backgroundColor="white";
    theTextBox.style.opacity = '0.5';
    theText.style.opacity = 100
    theConfetti.style.display = "block";
}

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;

        setTimeout(typeWriter, speed);
    }
    console.log('click!');
}