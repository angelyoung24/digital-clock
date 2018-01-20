// time(d) function is suppose to create the hours minutes and seconds
// function zero(z) puts zeros at the seconds

var p = document.getElementById('tick');


function zero(z) {
    if (z < 10) {
        z = "0" + z;
    }
    return z;
}

function time() {
    var d = new Date();
    var h = zero(d.getHours());
    var m = zero(d.getMinutes());
    var s = zero(d.getSeconds());
    p.innerHTML = h + ":" + m + ":" + s;
    var r = parseInt(s) * 1;
    var g = parseInt(s) * 2;
    var b = parseInt(s) * 3;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

}

setInterval(function() {
    time()
}, 1000);

document.getElementById('greeting').innerHTML = new Date().getHours() >= 12 ? 'Good Afternoon' : 'Good Morning' : 'Good Evening';