
// >>- setInterval & clearInterval -->
var id;
function start() {
    var a = 0;
    id = setInterval(Anim, 1000)

    function Anim() {
        a = a + 10;
        var target = document.getElementById("test");
        target.style.marginLeft = a + 'px';
    }
}

function stop() {
    clearInterval(id);
}


// >>-  setTimeout & clear Timeout -->
var x = setTimeout(Anime, 5000);
function Anime() {
    document.getElementById("test1").style.width = "500px";
}

function StopAnime() {
    clearTimeout(x);
}