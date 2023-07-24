// target background,  
let targetBackground = document.getElementById("background");

// target keyboard events
let onKeyDown = document.getElementById("KeyDown");
let onKeyUp = document.getElementById("KeyUp");
let onKeyPress = document.getElementById("KeyPress");

// add event listener 
onKeyDown.addEventListener("keydown", function(){
    targetBackground.style.background = this.value;
});

onKeyUp.addEventListener("keyup", function(){
    targetBackground.style.background = this.value;
});

onKeyPress.addEventListener("keypress", function(){
    targetBackground.style.background = this.value;
});
