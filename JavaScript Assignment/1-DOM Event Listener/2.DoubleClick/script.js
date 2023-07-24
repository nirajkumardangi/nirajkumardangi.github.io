var buttonText = document.getElementById("button");
var mainDiv = document.getElementById("main");

mainDiv.addEventListener("dblclick", function(){
    var x = mainDiv.style.background = "Orange";
    buttonText.innerText = x + " Color";
})