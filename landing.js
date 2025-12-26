// DARK MODE TOGGLE
const themeBtn = document.querySelector(".theme-btn");
const modeText = document.querySelector(".mode-text");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
        modeText.textContent = "Light";
    } else {
        themeBtn.textContent = "🌙";
        modeText.textContent = "Dark";
    }
});


// GET STARTED BUTTON NAVIGATION
const getStartedBtn = document.querySelector(".get-started");

getStartedBtn.addEventListener("click", () => {
    window.location.href = "home.html"; // change if needed
});
