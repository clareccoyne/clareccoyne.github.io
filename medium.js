let theButton = document.querySelector('button');
let theBody = document.querySelector('body');
let theText = document.querySelector('p');
let textBackground = document.querySelector(".response")

theButton.addEventListener('click', isClicked);

function isClicked() {
    console.log("clicked");
    theBody.style.backgroundImage = "url('eyes.gif')";
    theText.style.opacity = 100
    textBackground.style.opacity = 100
}