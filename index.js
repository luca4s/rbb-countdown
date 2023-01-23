var finalbattle = 1674936000000;
function playsound(str) {
    var audio = null;
    if (str == "DJ") {
        audio = new Audio("sounds/dj.mp3");
    } else if (str == "Sabrina") {
        audio = new Audio("sounds/sabrina.mp3");
    } else if (str == "Russo") {
        audio = new Audio("sounds/russo.mp3");
    } else if (str == "Duncan") {
        audio = new Audio(`sounds/duncan/${Math.floor((Math.random() * 8) + 1)}.mp3`);
    };
    audio.play();
};
var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = finalbattle - now;
    var time = [Math.floor(distance / (1000 * 60 * 60 * 24)), Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)), Math.floor((distance % (1000 * 60)) / 1000)];
    for (let i = 0; i < time.length; i++) {
        time[i] = `${time[i]}`;
        if (time[i].length < 2) {
            time[i] = `0${time[i]}`;
        };
    };
    document.getElementById("time").innerHTML = `${time[0]}:${time[1]}:${time[2]}:${time[3]}`;
    if (distance < 1000) {
        document.getElementById("time").innerHTML = "00:00:00:00";
        clearInterval(x);
    };
}, 1);