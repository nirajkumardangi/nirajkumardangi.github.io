var buttonText = document.getElementById("button");
var mainDiv = document.getElementById("main");

mainDiv.addEventListener("mouseover", function(){
    var x = mainDiv.style.background = "Pink";
    buttonText.innerText = x + " Color";
});