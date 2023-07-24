var buttonText = document.getElementById("button");
var mainDiv = document.getElementById("main");

mainDiv.addEventListener("keyup", function(){
    mainDiv.style.background = "Orange";
    buttonText.innerText = "Color Changed";
})