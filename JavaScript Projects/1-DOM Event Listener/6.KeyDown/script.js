var buttonText = document.getElementById("button");
var mainDiv = document.getElementById("main");

mainDiv.addEventListener("keydown", function(){
    var x = mainDiv.style.background = "Orange";
    buttonText.innerText = x + " Color";
})