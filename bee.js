let honeyOne = document.querySelector("#honey1");
let honeyTwo = document.querySelector("#honey2");
let honeyThree = document.querySelector("#honey3");
let honeyFour = document.querySelector("#honey4");
let honeyFive = document.querySelector("#honey5");
let honeyMessage = document.querySelector("#p1");
let ouch = document.querySelector("#ouch");
let sting = document.querySelector("#sting");
let leave = document.querySelector("#leave");

const beeOne = document.querySelector(".button1");
const beeTwo = document.querySelector(".button2");
const beeThree = document.querySelector(".button3");
const beeFour = document.querySelector(".button4");
const beeFive = document.querySelector(".button5");
const beeSix = document.querySelector(".button6");
const beeSeven = document.querySelector(".button7");
const beeEight = document.querySelector("button8");
const youLose = document.querySelector(".lose");

beeOne.addEventListener("click", beeClick1);
beeTwo.addEventListener("click", beeClick2); 
beeThree.addEventListener("click", beeClick3); 
beeFour.addEventListener("click", beeClick4); 
beeFive.addEventListener("click", beeClick5); 
beeSix.addEventListener("click", beeClick6); 
beeSeven.addEventListener("click", beeClick7); 
beeEight.addEventListener("click", beeClick8);  

function beeClick1(){
    honeyOne.style.display = "block";
    honeyMessage.style.display = "block";
    setTimeout(function() {
        honeyMessage.style.display="none";}, 5000);
}

function beeClick2(){
    honeyTwo.style.display = "block";
    honeyMessage.style.display = "block";
    setTimeout(function() {
        honeyMessage.style.display="none";}, 5000);
}

function beeClick3(){
    youLose.style.display = "block";
    ouch.style.display = "block";
    sting.style.display = "block";
    leave.style.display = "block";
}

function beeClick4(){
    honeyThree.style.display = "block";
    honeyMessage.style.display = "block";
    setTimeout(function() {
        honeyMessage.style.display="none";}, 5000);
}

function beeClick5(){
    youLose.style.display = "block";
    ouch.style.display = "block";
    sting.style.display = "block";
    leave.style.display = "block";
}

function beeClick6(){
    honeyFour.style.display = "block";
    honeyMessage.style.display = "block";
    setTimeout(function() {
        honeyMessage.style.display="none";}, 5000);
}

function beeClick7(){
    honeyFive.style.display = "block";
    honeyMessage.style.display = "block";
    setTimeout(function() {
        honeyMessage.style.display="none";}, 5000);
}

function beeClick8(){
    youLose.style.display = "block";
    ouch.style.display = "block";
    sting.style.display = "block";
    leave.style.display = "block";
}