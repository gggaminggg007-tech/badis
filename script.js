const text = "I never knew love could feel this deep until I met you. You are my everything.❤️";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typed-text").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}
function updateCountdown() {
    const valentines = new Date("Feb 14, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = valentines - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        document.getElementById("countdown").innerHTML =
            `Only ${days} days until our special day 💖`;
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();
document.addEventListener("keydown", function(e) {
    if (e.key === "k") {
        document.getElementById("secretMessage").style.display = "block";
    }
});


function showMessage() {
    document.getElementById("bgMusic").play();
    const messageContainer = document.querySelector('.message-container');
    const topMessage = document.querySelector('.topmessage');
    const envelope = document.querySelector('.envelope');
    typeEffect();
    topMessage.style.display = "none";
    envelope.style.display = "none";
    envelope.classList.add('open');
    messageContainer.style.display = "block";

    setTimeout(() => {
        messageContainer.classList.add('show');
        initSlideshow();
    }, 50);
}
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

function moveNoButton() {
    const container = document.querySelector(".question");

    const maxX = container.clientWidth - noBtn.offsetWidth;
    const maxY = container.clientHeight - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}
function showResponse(answer) {
    const responseDiv = document.querySelector('.response');
    const noBtn = document.querySelector('.question button:last-of-type');

    if (answer === 'yes') {
        launchHeartsExplosion();
        document.getElementById("proposalPopup").classList.add("show");
    } else {
        // Move the No button randomly
        noBtn.style.position = "absolute";
        noBtn.style.left = Math.random() * 80 + "%";
        noBtn.style.top = Math.random() * 80 + "%";
    }
}
function closeProposal() {
    document.getElementById("proposalPopup").classList.remove("show");
}
function launchHeartsExplosion() {
    for (let i = 0; i < 60; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = "50%";
        heart.style.bottom = "50%";
        heart.style.animationDuration = (Math.random() * 2 + 1) + "s";
        heart.style.transform = `rotate(-45deg) translate(${Math.random()*300-150}px, ${Math.random()*300-150}px)`;
        document.querySelector('.heart-container').appendChild(heart);

        setTimeout(() => heart.remove(), 3000);
    }
}
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.querySelector('.heart-container').appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 500);
let slideIndex = 0;
let slides = [];

function initSlideshow() {
    slides = document.getElementsByClassName("slide");
    if (!slides.length) return;

    // Hide all slides except first
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex = 0;
    slides[slideIndex].style.display = "block";

    // Start auto-slide
    setTimeout(nextSlide, 4000);
}

function nextSlide() {
    if (!slides.length) return;

    slides[slideIndex].style.display = "none";
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = "block";

    setTimeout(nextSlide, 4000); // continue auto-slide
}

// Manual controls
function plusSlides(n) {
    if (!slides.length) return;

    slides[slideIndex].style.display = "none";
    slideIndex += n;

    // Wrap around
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;

    slides[slideIndex].style.display = "block";
}