// Get the elements by ID
var x = document.getElementById("outputBox");
var decrementButton = document.getElementById("decrementButton");
var incrementButton = document.getElementById("incrementButton");
var resetButton = document.getElementById("resetButton");

var currentValue = x.innerText;

// Attach event listeners using addEventListener
decrementButton.addEventListener("click", () => {
    if (currentValue > -10) {
        currentValue--;
        x.innerText = currentValue;
    }
});

incrementButton.addEventListener("click", () => {
    if (currentValue < 10) {
        currentValue++;
        x.innerText = currentValue;
    }
});

resetButton.addEventListener("click", () => {
    currentValue = 0;
    x.innerText = currentValue;
});

