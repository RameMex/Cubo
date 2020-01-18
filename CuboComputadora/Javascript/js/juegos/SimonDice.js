var BuscandoCara = new Array (0,0,0,0,0,0,0,0,0,0);
var pr = []

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
*/


function cuerpoJuegoSimonDice(){
    clearTimeout(inicial);
    
    inicial= setTimeout(function(){
        if(numAleatorio == 0){
            if(valorTiempo == tiempoDeInicio){
                comparacionDiv();
                valorTiempo = 0;
                temporal = true;
            }
            
        }
        ValorTiempoActual = ValorTiempoActual + 0.01;
        document.getElementById('tiempo').innerHTML = "Tiempo :" + (ValorTiempoActual).toFixed(2)+" S";
        valorTiempo = valorTiempo+ 10 ;
        if(valorTiempo == TiempoEntreCara && temporal == true){ 
            valorTiempo = 0; 
            if(nivel == 1){
                adentroDelCallbackNivel1(); 
            }else if(nivel == 2){
                adentroDelCallbackNivel2();
            }else if(nivel == 3 ){
                adentroDelCallbackNivel3();
            }
            
        };
        if(vidas == 0 ){
            // alert("Rene Perdiste")
            JuegoPerdido()
            JugandoAhora = false;
        }else if(jugGanado == true){
            JugandoAhora = false;       
         }else{
            cuerpoJuegoSimonDice();
            quitarVidas();
            finDelJuego();
            
         }
     }, 10);
}

function crearArreglos(ronda,ciclosa, SecuenciaSimonDicea = []){
    var ciclos =ciclosa;
    var SecuenciaSimonDice=SecuenciaSimonDicea;
    var numAleatorio = Math.round(Math.random() * (6 - 1) + 1);
    SecuenciaSimonDice.push(numAleatorio);
    console.log(SecuenciaSimonDice);
    ciclos +=1;
    if(ronda+1 == ciclos ){
        pr = SecuenciaSimonDice;
    }else{
        crearArreglos(ronda,ciclos,SecuenciaSimonDice);
        
    }
    
}
/*-
function comparacionDivSimonDice(ronda,ciclosa, SecuenciaSimonDicea = []){
    var ciclos =ciclosa;
    var SecuenciaSimonDice=SecuenciaSimonDicea;
    var numAleatorio = Math.round(Math.random() * (6 - 1) + 1);
    SecuenciaSimonDice.push(numAleatorio);
    ciclos +=1;
    
    
    if(nivel == 1 ){
        valorCaja1Principal = detectarValorSelectorCaras()[0];
        valorCaja2Principal = detectarValorSelectorCaras()[1];
        var valorSeleccion = detectarValorSelectorCaras()[2];
        if(rondaAnterior == 2 && DivTotal == 0){
            RondaTexto = 1;
        }
        if(numAleatorio < 4){
            creandoDiv(valorCaja1Principal,valorSeleccion)
            DivsMovimientoCreacion();
        }
        if(numAleatorio > 3){
            creandoDiv(valorCaja2Principal,valorSeleccion);
            DivsMovimientoCreacion();
        }

    }else if(nivel == 2){
        valorCaja1Principal = detectarValorSelectorCaras()[0];
        valorCaja2Principal = detectarValorSelectorCaras()[1];
        valorCaja3Principal = detectarValorSelectorCaras()[2];
        var valorSeleccion = detectarValorSelectorCaras()[3];
        if(rondaAnterior == 2 && DivTotal == 0){
            RondaTexto = 1;
        }
        if(numAleatorio < 3){
            creandoDiv(valorCaja1Principal,valorSeleccion)
            DivsMovimientoCreacion();
        }
        if(numAleatorio > 2 && numAleatorio < 5){
            creandoDiv(valorCaja2Principal,valorSeleccion)
            DivsMovimientoCreacion();
        }
        if(numAleatorio > 4){
            creandoDiv(valorCaja3Principal,valorSeleccion)
            DivsMovimientoCreacion();
        }

    }else if(nivel == 3){
        valorCaja1Principal = detectarValorSelectorCaras()[0];
        valorCaja2Principal = detectarValorSelectorCaras()[1];
        valorCaja3Principal = detectarValorSelectorCaras()[2];
        valorCaja4Principal = detectarValorSelectorCaras()[3];
        valorCaja5Principal = detectarValorSelectorCaras()[4];
        valorCaja6Principal = detectarValorSelectorCaras()[5];
        var valorSeleccion = detectarValorSelectorCaras()[6];
        if(rondaAnterior == 2 && DivTotal == 0){
            RondaTexto = 1;
        }
        if(numAleatorio ==  1){
            creandoDiv(valorCaja1Principal,valorSeleccion);
            DivsMovimientoCreacion();
        }
        if(numAleatorio ==  2){
            creandoDiv(valorCaja2Principal,valorSeleccion)
            DivsMovimientoCreacion();
        }
        if(numAleatorio ==  3){
            creandoDiv(valorCaja3Principal,valorSeleccion)
            DivsMovimientoCreacion();
        }
        if(numAleatorio ==  4){
            creandoDiv(valorCaja4Principal,valorSeleccion)
            DivsMovimientoCreacion();
        }
        if(numAleatorio ==  5){
            creandoDiv(valorCaja5Principal,valorSeleccion)
            DivsMovimientoCreacion();
        }
        if(numAleatorio ==  6){
            creandoDiv(valorCaja6Principal,valorSeleccion)
            DivsMovimientoCreacion();
        }

    }
    if(ronda+1 == ciclos ){
        pr = SecuenciaSimonDice;
    }else{
        comparacionDivSimonDice(ronda,ciclos,SecuenciaSimonDice);
        
    }
}*/