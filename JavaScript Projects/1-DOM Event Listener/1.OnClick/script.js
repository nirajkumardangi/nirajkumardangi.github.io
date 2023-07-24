var buttonText = document.getElementById("button");

var Main = document.getElementById("main");

Main.addEventListener("click", function () {
    Main.style.background = "orange";
    buttonText.innerText = "Hello! How are You";
})
