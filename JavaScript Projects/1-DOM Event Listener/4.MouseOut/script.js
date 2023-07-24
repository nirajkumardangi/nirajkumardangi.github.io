var buttonText = document.getElementById("button");
var mainDiv = document.getElementById("main");

mainDiv.addEventListener("mouseout", function(){
    mainDiv.style.background = "white";
    buttonText.innerText = "Color Removed";
});