console.log("the message!");



const theButton = document.querySelector("#firstButton");
let theText = document.querySelector('h2');
let theBody = document.querySelector('body');
let theLink = document.querySelector('a');
let theImage = document.querySelector('img');
let colors = ['fuschia', 'lightgreen', 'lightblue', 'violet', 'yellow', 'pink', 'peachpuff', 'white', 'black'];

// console.log(theText)

theBody.style.backgroundColor = 'yellow';
theButton.addEventListener('click', isClicked);


function isClicked() {
    console.log("clicked");
    let colorIndex = parseInt(Math.random() * colors.length);
    theBody.style.backgroundColor = colors[colorIndex];
    theText.style.color = "blue";
    theText.textContent = "you turned me blue!";
    theBody.style.backgroundImage = "url('clouds.png')";
    theLink.style.opacity = 100
    theImage.style.opacity = 100
}
