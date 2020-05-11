let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let warning = document.querySelector("#warning");
let red1 = document.querySelector("#red1");
let red2 = document.querySelector("#red2");
let hands = document.querySelector("#monster");
let ten = document.querySelector("#ten");

const red = document.querySelector(".red");
const flash = document.querySelector(".flash");
const monster = document.querySelector(".monster");

one.addEventListener("click", click1);
two.addEventListener("click", click2); 
three.addEventListener("click", click3); 
four.addEventListener("click", click4); 
five.addEventListener("click", click5); 
six.addEventListener("click", click6); 
seven.addEventListener("click", click7); 
eight.addEventListener("click", click8);
nine.addEventListener("click", click9);
warning.addEventListener("click", warningClick);

function click1(){
    one.style.display = "none";
    two.style.display = "block";
}

function click2(){
    two.style.display = "none";
    warning.style.display = "block";
    flash.style.display = "block";
}

function warningClick(){
    three.style.display = "block";
    warning.style.display = "none";
    flash.style.display = "none";
}

function click3(){
    three.style.display = "none";
    four.style.display = "block";
    red.style.display = "block";
    red1.style.display ="block";
    red2.style.display ="block";
}

function click4(){
    four.style.display = "none";
    red.style.display = "none";
    red1.style.display = "none";
    red2.style.display = "none";
    five.style.display = "block";
}

function click5(){
    five.style.display = "none";
    six.style.display = "block";
}

function click6(){
    six.style.display = "none";
    seven.style.display = "block";
}

function click7(){
    seven.style.display = "none";
    eight.style.display = "block";
}

function click8(){
    eight.style.display = "none";
    nine.style.display = "block";
}

function click9(){
    nine.style.display = "none";
    monster.style.display = "block";
    hands.style.display = "block";
    ten.style.display = "block";
}