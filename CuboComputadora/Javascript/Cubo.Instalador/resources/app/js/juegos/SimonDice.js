var BuscandoCara = new Array (0,0,0,0,0,0,0,0,0,0);
var pr = []
var SimonDiceJugando = false
var TiempoTomarCara = 1000; // 1 segundo = 1000ms
var ValorTiempoActualSimonDice = 0;
var RondaTextoAnterior = 0;
var temporal = false
var numAleatorio = 0
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
        if(pr == ""){
            
            if(valorTiempo == tiempoDeInicio){
                crearArreglos(RondaTexto + 1)     
                console.log(pr)
                valorTiempo = 0;
                temporal = true;
            }
            
        }else{
            if( valorTiempo == TiempoEntreCara && temporal == true && RondaTexto != RondaTextoAnterior + 1 ){
                if(pr[RondaTexto] ==1 ){
                    
                }
                DivsMovimientoCreacionSimonDice()
                comparacionDivSimonDice()
                
            }
        }
        ValorTiempoActual = ValorTiempoActual + 0.01;
        valorTiempo = valorTiempo+ 10 ;

        if(valorTiempo == TiempoEntreCara && temporal == true){
            console.log('adentro')
            DivsMovimientoCreacionSimonDice()
            comparacionDivSimonDice()
            if(pr.length == 2 ){ // si el arreglo del simon dice es de 2 quiere decir que es la ronda 1 por eso temporal false
                temporal = false
                valorTiempo = 0
            }
            valorTiempo = 0
            /*if(nivel == 1){
                adentroDelCallbackNivel1(); 
            }else if(nivel == 2){
                adentroDelCallbackNivel2();
            }else if(nivel == 3 ){
                adentroDelCallbackNivel3();
            }*/
            
        }
        if(valorTiempo == 2000 && temporal == false && pr.length >1){
            if(nivel == 1){
                adentroDelCallbackNivel1(); 
            }else if(nivel == 2){
                adentroDelCallbackNivel2();
            }else if(nivel == 3 ){
                adentroDelCallbackNivel3();
            }
            if(ronda == pr.length){
                valorTiempo = 0
                temporal = true
            }
        }
        if(RondaTexto == RondaTextoAnterior+1){
            valorTiempo = 0;
            crearArreglos(RondaTexto+1)
            RondaTextoAnterior = RondaTexto
            temporal = true
        } 
        if(vidas == 0 ){
            // alert("Rene Perdiste")
            quitarVidas();
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
/* Funcion para crear arreglos para Simon Dice ciclos a debe ser menos a ronda , el ciclosa es para pruebas de la funcion*/
function crearArreglos(ronda,ciclosa = 0, SecuenciaSimonDicea = []){
    if(ronda < ciclosa ){
        return console.log('Error Ciclosa es mayor a ronda')
    }
    var ciclos =ciclosa;
    var SecuenciaSimonDice=SecuenciaSimonDicea;
    var numAleatorio = Math.round(Math.random() * (6 - 1) + 1);
    SecuenciaSimonDice.push(numAleatorio);
    console.log(SecuenciaSimonDice);
    ciclos +=1;
    if(ronda+1 == ciclos ){
        pr = SecuenciaSimonDice; // Pr es una variable global para guardar el arreglo de secuencia
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

function comparacionDivSimonDice() {
    numAleatorio = pr[DivTotal]
	if (nivel == 1) {
		valorCaja1Principal = detectarValorSelectorCaras()[0]
		valorCaja2Principal = detectarValorSelectorCaras()[1]
		var valorSeleccion = detectarValorSelectorCaras()[2]
		if (rondaAnterior == 2 && DivTotal == 0) {
			RondaTexto = 1
		}
		if (numAleatorio < 4) {
			creandoDiv(valorCaja1Principal, valorSeleccion)
			DivsMovimientoCreacionSimonDice()
		}
		if (numAleatorio > 3) {
			creandoDiv(valorCaja2Principal, valorSeleccion)
			DivsMovimientoCreacionSimonDice()
		}
	} else if (nivel == 2) {
		valorCaja1Principal = detectarValorSelectorCaras()[0]
		valorCaja2Principal = detectarValorSelectorCaras()[1]
		valorCaja3Principal = detectarValorSelectorCaras()[2]
		var valorSeleccion = detectarValorSelectorCaras()[3]
		if (rondaAnterior == 2 && DivTotal == 0) {
			RondaTexto = 1
		}
		if (numAleatorio < 3) {
			creandoDiv(valorCaja1Principal, valorSeleccion)
			DivsMovimientoCreacionSimonDice()
		}
		if (numAleatorio > 2 && numAleatorio < 5) {
			creandoDiv(valorCaja2Principal, valorSeleccion)
			DivsMovimientoCreacionSimonDice()
		}
		if (numAleatorio > 4) {
			creandoDiv(valorCaja3Principal, valorSeleccion)
			DivsMovimientoCreacionSimonDice()
		}
	} else if (nivel == 3) {
		valorCaja1Principal = detectarValorSelectorCaras()[0]
		valorCaja2Principal = detectarValorSelectorCaras()[1]
		valorCaja3Principal = detectarValorSelectorCaras()[2]
		valorCaja4Principal = detectarValorSelectorCaras()[3]
		valorCaja5Principal = detectarValorSelectorCaras()[4]
		valorCaja6Principal = detectarValorSelectorCaras()[5]
		var valorSeleccion = detectarValorSelectorCaras()[6]
		if (rondaAnterior == 2 && DivTotal == 0) {
			RondaTexto = 1
		}
		if (numAleatorio == 1) {
			creandoDiv(valorCaja1Principal, valorSeleccion)
			DivsMovimientoCreacionSimonDice()
		}
		if (numAleatorio == 2) {
			creandoDiv(valorCaja2Principal, valorSeleccion)
			DivsMovimientoCreacionSimonDice()
		}
		if (numAleatorio == 3) {
			creandoDiv(valorCaja3Principal, valorSeleccion)
			DivsMovimientoCreacionSimonDice()
		}
		if (numAleatorio == 4) {
			creandoDiv(valorCaja4Principal, valorSeleccion)
			DivsMovimientoCreacionSimonDice()
		}
		if (numAleatorio == 5) {
			creandoDiv(valorCaja5Principal, valorSeleccion)
			DivsMovimientoCreacionSimonDice()
		}
		if (numAleatorio == 6) {
			creandoDiv(valorCaja6Principal, valorSeleccion)
			DivsMovimientoCreacionSimonDice()
		}
	}
}
function moviendoDivSimonDice(variablex) {
	if (variablex == 'Salto De Linea') {
		SaltoLinea += 1
		EspacioLinea = 0
		RondaTexto += 1
		//agregandoTextoRonda()
	} else {
		if (DivTotal > 0) {
			EspacioLinea += 1
		}
	}
	//$('.Div' + (ronda - 1)).attr('style','transform:scale(0.25,0.25); margin-left: '+ (66 + EspacioLinea*2) +'%; margin-top:'+ (-520 + SaltoLinea*30) +'px; height:200px; width:200px; background-color:black; transition: all 0.4; ')
	
}
function moverDivsSimonDice(){
    $('.Div' + (ronda - 1)).css('margin-left', 64 + EspacioLinea * 3 + '%')
	$('.Div' + (ronda - 1)).css('margin-top', -510 + SaltoLinea * 40 + 'px')
	$('.Div' + (ronda - 1)).css('transform', 'scale(0.15,0.15)')
	$('.Div' + (ronda - 1)).css('transition', 'all 0.4s')
	$('.Div' + (ronda - 1)).css('border', '4px solid white')
	$('.Div' + (ronda - 1)).css('opacity', '0.4')
}

function DivsMovimientoCreacionSimonDice() {
	DivTotal += 1
	if (DivTotal == rondaAnterior) {
		rondaAnterior2 = DivTotal + 1
		DivTotal = 1
		if (rondaAnterior == 2) {
			DivTotal = 0
		}

		moviendoDivSimonDice('Salto De Linea')
		console.log('Ronda algo')

		// AL FINAL
		rondaAnterior = rondaAnterior2
	} else {
		moviendoDivSimonDice('xd')
	}
}
function adentroDelCallbackNivel1SimonDice() {
	JugandoAhora = true
	valorCaraActual = CaraADetectar()
	//var numAleatorio;
	if (nivel == 1 && ValorTiempoActual * 1000 > TiempoEntreCara) {
		if (
			(numAleatorio == 1 || numAleatorio == 2 || numAleatorio == 3) &&
			valorCaraActual <= 3
		) {
			Puntos += 100
			document.getElementById('Puntostt').innerHTML = 'Puntos :' + Puntos
		} else if (
			(numAleatorio == 4 || numAleatorio == 5 || numAleatorio == 6) &&
			valorCaraActual > 3
		) {
			Puntos += 100
			document.getElementById('Puntostt').innerHTML = 'Puntos :' + Puntos
		} else {
			vidas -= 1
			console.log('Una vida menos( ' + vidas + ' )')
		}
	}
}
function adentroDelCallbackNivel2SimonDice() {
	JugandoAhora = true
	valorCaraActual = CaraADetectar()
	//var numAleatorio;
	if (nivel == 2 && ValorTiempoActual * 1000 > TiempoEntreCara) {
		if ((numAleatorio == 1 || numAleatorio == 2) && valorCaraActual < 3) {
			Puntos += 100
			document.getElementById('Puntostt').innerHTML = 'Puntos :' + Puntos
		} else if (
			(numAleatorio == 3 || numAleatorio == 4) &&
			valorCaraActual > 2 && valorCaraActual < 5
		) {
			Puntos += 100
			document.getElementById('Puntostt').innerHTML = 'Puntos :' + Puntos
		} else if ((numAleatorio == 5 || numAleatorio == 6) && valorCaraActual > 4) {
			Puntos += 100
			document.getElementById('Puntostt').innerHTML = 'Puntos :' + Puntos
		} else {
			vidas -= 1
			console.log('Una vida menos( ' + vidas + ' )')
		}
	}
}
function adentroDelCallbackNivel3SimonDice() {
	JugandoAhora = true
	valorCaraActual = CaraADetectar()
	//var numAleatorio;
	if (nivel == 3 && ValorTiempoActual * 1000 > TiempoEntreCara) {
		if (numAleatorio == valorCaraActual) {
			Puntos += 100
			document.getElementById('Puntostt').innerHTML = 'Puntos :' + Puntos
		} else {
			vidas -= 1
			console.log('Una vida menos( ' + vidas + ' )')
		}
	}
}