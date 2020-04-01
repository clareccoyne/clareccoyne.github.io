console.log("the message!");



const theButton = document.querySelector("#firstButton");
let theText = document.querySelector('h2');
let theBody = document.querySelector('body');
let theLink = document.querySelector('a');
let theImage = document.querySelector('img');
// console.log(theText)

theButton.addEventListener('click', isClicked);

function isClicked() {
    console.log("clicked");
    theText.style.color = "blue";
    theText.textContent = "you turned me blue!";
    theBody.style.backgroundColor = "yellow";
    theBody.style.backgroundImage = "url('butterfly.gif')";
    theLink.style.opacity = 100
    theImage.style.opacity = 100
}