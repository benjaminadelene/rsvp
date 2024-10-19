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
        countdownElement.innerHTML = '<div class="countdown-complete">The Big Day is Here! 🎉</div>';
    } else {
        countdownElement.innerHTML = `
        <div class="countdown-item">
            <div class="countdown-number">${days}</div>
            <div class="countdown-label">Days</div>
        </div>
        <div class="countdown-separator">:</div>
        <div class="countdown-item">
            <div class="countdown-number">${String(hours).padStart(2, '0')}</div>
            <div class="countdown-label">Hours</div>
        </div>
        <div class="countdown-separator">:</div>
        <div class="countdown-item">
            <div class="countdown-number">${String(minutes).padStart(2, '0')}</div>
            <div class="countdown-label">Minutes</div>
        </div>
        <div class="countdown-separator">:</div>
        <div class="countdown-item">
            <div class="countdown-number">${String(seconds).padStart(2, '0')}</div>
            <div class="countdown-label">Seconds</div>
        </div>
    `;
    }
}

// Location switching function
function switchLocation(location) {
    // Update tab buttons
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
        if (button.textContent.toLowerCase() === location) {
            button.classList.add('active');
        }
    });

    // Update content visibility
    document.querySelectorAll('.location-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`${location}-content`).classList.add('active');
}

function startCountdowns() {
    setInterval(() => {
        updateCountdown("countdown-sg", weddingDateSG);
        updateCountdown("countdown-kch", weddingDateKCH);
    }, 1000);
}

// Initialize when page loads
window.addEventListener('load', () => {
    startCountdowns();
});