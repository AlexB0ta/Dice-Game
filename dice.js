function randomNr() {
    return Math.floor((Math.random() * 6) + 1);
}

var img1 = document.querySelector(".img1");
var nr1 = randomNr();
img1.src = './images/dice' + nr1 + '.png';

var img2 = document.querySelector(".img2");
var nr2 = randomNr();
img2.src = './images/dice' + nr2 + '.png';

var head = document.querySelector("h1");
var images=document.querySelectorAll("img");
if (nr1 > nr2) {
    head.textContent = "Player 1 wins!";
    images[0].classList.remove("invisible");
} else if (nr1 < nr2) {
    head.textContent = "Player 2 wins!";
    images[1].classList.remove("invisible");
} else {
    head.textContent = "Draw!";
}