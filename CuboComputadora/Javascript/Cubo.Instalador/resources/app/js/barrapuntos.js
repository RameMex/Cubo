
   
function colorCaraCubo(color){
    var Color = color;
    $('#CarasMod').attr('style','transform:scale(0.25,0.25); margin-left:0px; background-color:'+ Color +'; margin-top:300px;')
    crearCuadrado()
}
function crearCuadrado(){
    var nuevoCuadro = document.createElement('cuadradoInicial');
    var anteriorCuadro = document.getElementById('CarasMod');
    document.body.appendChild(nuevoCuadro);
}
function rotar(x,y,z){
    var x=x;
    var y = y;
    for(var i = 0; i<=360; i++){
        x = i;
        y = Math.random()*360;
        $('#cube').attr('style', 'transform: rotateX(' + x + 'deg) rotateY(' + y + 'deg);')

    }
    
}
function Juego(){
  alert("holamindo");
}