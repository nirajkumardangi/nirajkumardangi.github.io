// >>- Focus & Blur
var newWindows;
function NewWin() {
    newWindows = window.open("", "_blank", "width=300, height=200");
}
function FocusWin() {
    newWindows.focus();
}
function BlurWin() {
    newWindows.blur();
}

document.getElementById("openbtn").addEventListener("click", NewWin);
document.getElementById("focusbtn").addEventListener("click", FocusWin);
document.getElementById("blurbtn").addEventListener("click", BlurWin);

//  **************************************************************************

document.getElementById("fname").addEventListener("focus", FocusFun);
document.getElementById("fname").addEventListener("blur", BlurFun);
document.getElementById("lname").addEventListener("focus", FocusFun);
document.getElementById("lname").addEventListener("blur", BlurFun);
document.getElementById("class1").addEventListener("focus", FocusFun);
document.getElementById("class1").addEventListener("blur", BlurFun);

document.getElementById("fname").addEventListener("input", input1);
function input1() {
    var x = this.value;
    document.getElementById("input1").value = x;
}


function FocusFun() {
    this.style.background = "green";
}
function BlurFun() {
    this.style.background = "";
}

// **********************************************
function submitFun(){
    var x = document.getElementById("fname").value;
    alert("Namaste, Mrs "+ x);
}