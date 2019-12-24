var angX = 0;
var angY = 0;
var sum = 45;
var valorCaraActual;
document.onkeydown = checkKey;
function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // Arriba
        angX = angX + sum;
    }
    else if (e.keyCode == '40') {
        // Abajo
        angX = angX - sum;

    }
    else if (e.keyCode == '37') {
       // Izquierda
       angY = angY - sum;
    }
    else if (e.keyCode == '39') {
       // Derecha
       angY = angY + sum;
    }
    $('#cube').attr('style', 'transform: rotateX(' + angX + 'deg) rotateY(' + angY + 'deg);')

    valorCaraActual = CaraADetectar();
}
$('.boton').on('click', function() {
  switch ($(this).attr("id")) {
    case "arriba":
      angX = angX + 90;
      break;
    case "abajo":
      angX = angX - 90;
      break;
    case "derecha":
      angY = angY + 90;
      break;
    case "izquierda":
      angY = angY - 90;
      break;
  }
  $('#cube').attr('style', 'transform: rotateX(' + angX + 'deg) rotateY(' + angY + 'deg);')
});