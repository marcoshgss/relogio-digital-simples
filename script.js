function clock() {
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    var hours   = document.getElementById("horas").innerHTML = h;
    var minutes = document.getElementById("minutos").innerHTML = m;
    var segunds = document.getElementById("segundos").innerHTML = s;

}

var interval = setInterval(clock, 1000);