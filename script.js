var birthday = new Date("Dec 7, 2024, 23:59:59").getTime();
var x = setInterval(function () {
  var agora = new Date().getTime();
  var distancia = birthday - agora;
  var dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  var horas = Math.floor(
    (distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((distancia % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = dias;
  document.getElementById("hours").innerHTML = horas;
  document.getElementById("minutes").innerHTML = minutos;
  document.getElementById("seconds").innerHTML = segundos;

  if (distancia < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Happy Birthday";
  }
}, 1000);
