var buttonText = document.getElementById("button");
var mainDiv = document.getElementById("main");

mainDiv.addEventListener("keypress", function(){
    mainDiv.style.background = "Orange";
    buttonText.innerText = "Color Changed";
});