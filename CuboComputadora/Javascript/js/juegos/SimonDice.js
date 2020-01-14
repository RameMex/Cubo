var BuscandoCara = new Array (0,0,0,0,0,0,0,0,0,0);
var ciclos =0;
var SecuenciaSimonDice=[];
var TiempoTomarCara = 1000; // 1 segundo = 1000ms
var ValorTiempoActualSimonDice = 0;
/*
function EjecutandoJuego(){
    cuerpoJuegoSimonDice()
}
function cuerpoJuegoSimonDice(){
    
    clearTimeout(inicial);
    
    inicial= setTimeout(function(){
        ValorTiempoActualSimonDice = ValorTiempoActualSimonDice + 0.01;
        document.getElementById('tiempo').innerHTML = "Tiempo :" + (TiempoTomarCara-ValorTiempoActualSimonDice).toFixed(2)+" S";
        valorTiempoSimonDice = valorTiempoSimonDice+ 10 ;
        if(ValorTiempoActualSimonDice == TiempoTomarCara){ 
            valorTiempoSimonDice = 0; 
            if(nivel == 1){
                adentroDelCallbackNivel1SimonDice(); 
            }else if(nivel == 2){
                adentroDelCallbackNivel2SimonDice();
            }else if(nivel == 3 ){
                adentroDelCallbackNivel3SimonDice();
            }
            
        };
        if(vidas == 0 ){
            // alert("Rene Perdiste")
            JuegoPerdido()
            JugandoAhora = false;
        }else if(jugGanado == true){
            JugandoAhora = false;       
         }else{
            cuerpoJuego();
            finDelJuego();
            
         }
     }, 10);

     
}

function crearArreglos(){
    var numAleatorio = Math.round(Math.random() * (6 - 1) + 1);
    SecuenciaSimonDice.push(numAleatorio);
    SecuenciaSimonDice.push(numAleatorio*2);
    console.log(SecuenciaSimonDice);
    ciclos +=1;
}*/