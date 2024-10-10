// Countdown Timer
const weddingDateSG = new Date("2024-11-30T10:30:00+08:00").getTime();
const weddingDateKCH = new Date("2024-12-15T10:30:00+08:00").getTime();

function updateCountdown(elementId, targetDate) {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById(elementId);

    if (distance < 0) {
        countdownElement.innerHTML = "The Big Day is Here!";
    } else {
        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

function startCountdowns() {
    setInterval(() => updateCountdown("countdown-sg", weddingDateSG), 1000);
    setInterval(() => updateCountdown("countdown-kch", weddingDateKCH), 1000);
}

// Start the countdowns when the page loads
window.addEventListener('load', startCountdowns);

// Image modal
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("modalImg");
let slideIndex = 1;
const slides = document.querySelectorAll('.gallery img');

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    modalImg.src = slides[slideIndex-1].src;
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}