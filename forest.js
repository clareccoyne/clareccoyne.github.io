var i= 0;
var txt = "As the friends travel deeper into the forest, night starts to fall and the wind gets chilly... Squirrel must be freezing and lonely :( They better hurry up and find him! Maybe there are some clues around here... *HINT* look behind the vines!";
var speed = 50;
var possumIter = 1;

const theButton = document.querySelector(".startButton");
const thePossumButton = document.querySelector(".type1");
const theSheepButton = document.querySelector(".type2");
const theVineButton1 = document.querySelector(".vine1");
const theVineButton2 = document.querySelector(".vine2");
const theVineButton3 = document.querySelector(".vine3");
const theVineButton4 = document.querySelector(".vine4");
const theBackArrow = document.querySelector(".arrow");
const theTextBubble = document.querySelector(".text-bubble");

let theTextBox = document.querySelector("#opacity");
let theText = document.querySelector("#demo");
let thePossumSpeech = document.querySelector("#opposumtalk");
let theSheepSpeech = document.querySelector("#sheeptalk");

theButton.addEventListener("click", isClicked);
thePossumButton.addEventListener("mouseover", possumTalking);
theSheepButton.addEventListener("mouseover", sheepTalking);
theVineButton1.addEventListener("click", disappearLast);
theVineButton2.addEventListener("click", disappear3);
theVineButton3.addEventListener("click", disappear2);
theVineButton4.addEventListener("click", disappear1);

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


function isClicked() {
    theTextBox.style.backgroundColor="white";
    theTextBox.style.opacity = '0.5';
    theText.style.opacity = 100
}

function disappear1() {
    theVineButton4.style.display="none";
}

function disappear2() {
    theVineButton3.style.display="none";
}

function disappear3() {
    theVineButton2.style.display="none";
}

function disappearLast() {
    theVineButton1.style.display="none";
    theBackArrow.style.display="block";
    theTextBubble.style.display="block";
}

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;

        setTimeout(typeWriter, speed);
    }
    console.log('click!');
}