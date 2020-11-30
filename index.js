// time(d) function is suppose to create the hours minutes and seconds
// function zero(z) puts zeros at the seconds

const p = document.getElementById('tick');


function zero(z) {
    if (z < 10) {
        z = "0" + z;
    }
    return z;
}

function time() {
    let d = new Date();
    let h = zero(d.getHours());
    let m = zero(d.getMinutes());
    let s = zero(d.getSeconds());
    p.innerHTML = h + ":" + m + ":" + s;
    let r = parseInt(s) * 6;
    let g = parseInt(s) * 2;
    let b = parseInt(s) * 2;
    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

}

setInterval(function() {
    time()
}, 1000);

