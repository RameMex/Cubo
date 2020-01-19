
var BuscandoCara = new Array (0,0,0,0,0,0,0,0,0,0);
var tiempo = 0;
var ronda = 0;                          //
var inicial;
var PuntosViz = 0;
var JugandoAhora = false;
var ValorTiempoActual = 0;              //
var valorTiempo = 0;                    //
var Puntos = 0;                         //
var vidas = 4;                          // vidas == vidas -1
var nivel = 0;                          
var TiempoEntreCara = 5000;
var numAleatorio = 0;
var valorCaja1Principal;
var valorCaja2Principal;
var valorCaja3Principal;
var valorCaja4Principal;
var valorCaja5Principal;
var valorCaja6Principal;

var DivTotal = -1;                       // 
var rondaAnterior = 3;                   //
var rondaAnterior2 = 0;                  //
var SaltoLinea = -1;                     //
var EspacioLinea = -1;                   //
var RondaTexto = 0;                      //
var jugGanado = false;
// Variable Global 
var JuegoQueSeJuega = '';
var temporal = false;
var tiempoDeInicio = 5000;


/*function CaraADetectar(x,y,nivel){
    var dato = 0;
    var x = x;
    console.log(x);
    var y = y;
    console.log(y);
    var nivel = nivel;
    if (x == 0 && y == -90){
        if(nivel == 1){

        }else if (nivel == 2){

        }else if(nivel == 3){

        }
        console.log('Verde');
        dato = 1;
	} else if (x == 90 && y == 0){
		console.log('Azul')
		dato= 2;
	} else if (x == -90 && y == 0){
		console.log('Rojo')
		dato = 3
	} else if (x == 0 && y == 0){
		console.log('Cian')
		dato = 4;
	} else if (x == 0 && y == 90){
		console.log('Amarillo')
		dato = 5;
	} else if (x == 0 && y == -180){
		console.log('Morado')
        updateRotate(0, -180, 0)
        dato=6;
    }
    return dato;
}
*/

function CaraADetectar(){
    var dato = 0;
    var Color1;
    var Color2;
    var Color3;
    var Color4;
    var Color5;
    var Color6;

    var Color1width;
    var Color2width;
    var Color3width;
    var Color4width;
    var Color5width;
    var Color6width;

    Color1 = document.getElementById("right") //verde
    Color2 = document.getElementById("bottom") //azul
    Color3 = document.getElementById("top") //rojo
    Color4 = document.getElementById("front") //celeste
    Color5 = document.getElementById("left") //amarillo
    Color6 = document.getElementById("back") //morado
   
    Color1width = Color1.getBoundingClientRect().width
    Color2width = Color2.getBoundingClientRect().width
    Color3width = Color3.getBoundingClientRect().width
    Color4width = Color4.getBoundingClientRect().width
    Color5width = Color5.getBoundingClientRect().width
    Color6width = Color6.getBoundingClientRect().width
   
    var Color1height = Color1.getBoundingClientRect().height;
    var Color2height = Color2.getBoundingClientRect().height;
    var Color3height = Color3.getBoundingClientRect().height;
    var Color4height = Color4.getBoundingClientRect().height;
    var Color5height = Color5.getBoundingClientRect().height;
    var Color6height = Color6.getBoundingClientRect().height;


    if((Color1width >= 180 && Color1width <= 190) && (Color1height >= 180 && Color1height <= 190)){
        dato = 1;
        console.log('Verde');

    }else if((Color2width >= 180 && Color2width <= 190) && (Color2height >= 180 && Color2height <= 190)){
        dato = 2;
        console.log('Azul')

    }else if((Color3width >= 180 && Color3width <= 190) && (Color3height >= 180 && Color3height <= 190)){
        dato = 3;
        console.log('Rojo')

    }else if((Color4width >= 180 && Color4width <= 190) && (Color4height >= 180 && Color4height <= 190)){
        dato = 4;
        console.log('Cian')

    }else if((Color5width >= 180 && Color5width <= 190) && (Color5height >= 180 && Color5height <= 190)){
        dato = 5;
        console.log('Amarillo')

    }else if((Color6width >= 180 && Color6width <= 190) && (Color6height >= 180 && Color6height <= 190)){
        dato = 6;
        console.log('Morado')

    }
    
        return dato;
    
    
}

function cuerpoJuego(){
    
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
            quitarVidas();
            cuerpoJuego();
            finDelJuego();
            
            
         }
     }, 10);

     
}
function JuegoPerdido(){
    alert("Perdiste")
    document.getElementById('AnuncioD').className = "Anuncio"; 

}
function TablaDePuntuacion(){
    SimonDice[5] = Puntos;
    ordenar();
}

function comparar(a,b){return a - b}
function ordenar(){

    SimonDice1=SimonDice.sort(comparar)
  
    alert('el orden de los números es  ' + SimonDice1[0] + '-' + SimonDice1[1] + '-' + SimonDice1[2] + '-' + SimonDice1[3] + '-' + SimonDice1[4] + '-' + SimonDice1[5] + '-' + SimonDice1[6]);
  }
function adentroDelCallbackNivel1(){
    
    JugandoAhora = true;
    valorCaraActual = CaraADetectar()
    //var numAleatorio;
    if(nivel == 1 && (ValorTiempoActual*1000 > TiempoEntreCara) ){
        
        if((numAleatorio == 1  || numAleatorio == 2 || numAleatorio == 3 )  && valorCaraActual <=3 ){
        
            Puntos+= 100;
            document.getElementById('Puntostt').innerHTML = "Puntos :" + Puntos;
        }else if((numAleatorio == 4  || numAleatorio == 5 || numAleatorio == 6 )  && valorCaraActual > 3){
            Puntos+= 100;
            document.getElementById('Puntostt').innerHTML = "Puntos :" + Puntos;
        }else{
            vidas-=1;
            console.log("Una vida menos( "+vidas+" )");
        }
    }
    comparacionDiv()
    
}
function adentroDelCallbackNivel2(){
    
    JugandoAhora = true;
    valorCaraActual = CaraADetectar()
    //var numAleatorio;
    if(nivel == 2 && (ValorTiempoActual*1000 > TiempoEntreCara) ){
        
        if((numAleatorio == 1  || numAleatorio == 2)  && valorCaraActual < 3 ){
        
            Puntos+= 100;
            document.getElementById('Puntostt').innerHTML = "Puntos :" + Puntos;
        }else if((numAleatorio == 3  || numAleatorio == 4)  && (valorCaraActual > 2 && valorCaraActual < 5)){
            Puntos+= 100;
            document.getElementById('Puntostt').innerHTML = "Puntos :" + Puntos;
        }else if((numAleatorio == 5  || numAleatorio == 6)  && (valorCaraActual > 4)){
            Puntos+= 100;
            document.getElementById('Puntostt').innerHTML = "Puntos :" + Puntos;
        }else{
            vidas-=1;
            console.log("Una vida menos( "+vidas+" )");
        }
    }
    comparacionDiv();
    
}
function adentroDelCallbackNivel3(){
    
    JugandoAhora = true;
    valorCaraActual = CaraADetectar()
    //var numAleatorio;
    if(nivel == 3 && (ValorTiempoActual*1000 > TiempoEntreCara) ){  

        if(numAleatorio ==  valorCaraActual){
            Puntos+= 100;
            document.getElementById('Puntostt').innerHTML = "Puntos :" + Puntos;
        }else{
            vidas-=1;
            console.log("Una vida menos( "+vidas+" )");  
        }
    }
    comparacionDiv();
    
}
function creandoDiv(valorCara,valorSeleccion){
    ronda += 1;
    //var btn = document.createElement("DIV");
    //btn.innerHTML = "CLICK ME";
    var CreandoDiv = document.createElement('DIV');
    CreandoDiv.className = 'Div' + ronda;
    document.body.appendChild(CreandoDiv);
    //
    $('.Div' + ronda).css("backgroundColor",valorCara );
    if(valorSeleccion > 0 ){
        $('.Div' + ronda).css("background-image",'url('+direccionImagenes+valorCara+')' );
        $('.Div' + ronda).css("background-repeat",'no-repeat' );
        //$('.Div' + ronda).css("backgroundColor",'white' );
    }
    $('.Div' + ronda).css("height","200px" );
    $('.Div' + ronda).css("width","200px" );
    $('.Div' + ronda).css("position","fixed" );
    $('.Div' + ronda).css("margin-left","75.5%" );
    $('.Div' + ronda).css("margin-top","-690px" );
    $('.Div' + ronda).css("transition","all 0.4s" );
    $('.Div' + ronda).css("border","4px solid white" );
    //$('.Div' + ronda).css("background-image","url("img/imgCaras/DodecahedronGeometry.svg")" );
    
}
function moviendoDiv(variablex){
    if( variablex == 'Salto De Linea'){
        SaltoLinea += 1;  
        EspacioLinea = 0;
        RondaTexto += 1;
        //agregandoTextoRonda()
    }else{
        if(DivTotal >0){
            EspacioLinea +=1;
        }
       
    }
     //$('.Div' + (ronda - 1)).attr('style','transform:scale(0.25,0.25); margin-left: '+ (66 + EspacioLinea*2) +'%; margin-top:'+ (-520 + SaltoLinea*30) +'px; height:200px; width:200px; background-color:black; transition: all 0.4; ')
    $('.Div' + (ronda - 1)).css("margin-left",(64 + (EspacioLinea*3))+"%");
    $('.Div' + (ronda - 1)).css("margin-top",(-510 + (SaltoLinea*40))+"px");
    $('.Div' + (ronda - 1)).css("transform","scale(0.15,0.15)");
    $('.Div' + (ronda - 1)).css("transition","all 0.4s");
    $('.Div' + (ronda - 1)).css("border","4px solid white");
    $('.Div' + (ronda - 1)).css("opacity","0.4");
}
function agregandoTextoRonda(){
    var Textoronda = document.createElement('P');
    Textoronda.className = 'Ronda' + RondaTexto;
    document.body.appendChild(Textoronda);
    document.getElementsByClassName('Ronda' + RondaTexto).innerHTML = "Ronda";
    $('.Div' + ronda).css("color","white" );
    $('.Div' + ronda).css("position","fixed" );
    $('.Div' + (ronda - 1)).css("margin-left","85%");
    $('.Div' + (ronda - 1)).css("margin-top",(-520 + (SaltoLinea*60))+"px");
}
function finDelJuego(){
    if(SaltoLinea == 5 && DivTotal == 8){
        juegoGanado();
        jugGanado = true;
    }

}
function juegoGanado(){
    alert("Juego ganado");
}
function asignandoValorCara(caja1,caja2,caja3){
    if(nivel == 1){
        var ColorCaja1;
        var ColorCaja2;
        //var Color1 = document.getElementsByClassName("right") //verde
        var Color2 = document.getElementsByClassName("bottom ") //azul
        var Color3 = document.getElementsByClassName("top") //rojo
        var Color4 = document.getElementsByClassName("front") //celeste
        var Color5 = document.getElementsByClassName("left") //amarillo
        var Color6 = document.getElementsByClassName("back") //morado
        //Caja 1
        if(caja1 == 1){ColorCaja1 = "hsla(0, 100%, 50%, 1)";}
        if(caja1 == 2){ColorCaja1 = "hsla(240, 100%, 50%, 1)"}
        if(caja1 == 3){ColorCaja1 = "hsla(300, 100%, 50%, 1)"}
        if(caja1 == 4){ColorCaja1 = "hsla(120, 100%, 50%, 1)"}
        if(caja1 == 5){ColorCaja1 = "hsla(60, 100%, 50%, 1)"}
        if(caja1 == 6){ColorCaja1 = "hsla(180, 100%, 50%, 1)"}
        //Caja 2
        if(caja2 == 1){ColorCaja2 = "hsla(0, 100%, 50%, 1)"}
        if(caja2 == 2){ColorCaja2 = "hsla(240, 100%, 50%, 1)"}
        if(caja2 == 3){ColorCaja2 = "hsla(300, 100%, 50%, 1)"}
        if(caja2 == 4){ColorCaja2 = "hsla(120, 100%, 50%, 1)"}
        if(caja2 == 5){ColorCaja2 = "hsla(60, 100%, 50%, 1)"}
        if(caja2 == 6){ColorCaja2 = "hsla(180, 100%, 50%, 1)"}
        $(".right").css("backgroundColor",ColorCaja1 );
        $(".bottom").css("backgroundColor",ColorCaja1 );
        $(".top").css("backgroundColor",ColorCaja1 );
        $(".front").css("backgroundColor",ColorCaja2 );
        $(".left").css("backgroundColor",ColorCaja2 );
        $(".back").css("backgroundColor",ColorCaja2 );
        valorCaja1Principal = ColorCaja1;
        valorCaja2Principal = ColorCaja2;
    }else if(nivel == 2){
        //var Color1 = document.getElementsByClassName("right") //verde
        var Color2 = document.getElementsByClassName("bottom ") //azul
        var Color3 = document.getElementsByClassName("top") //rojo
        var Color4 = document.getElementsByClassName("front") //celeste
        var Color5 = document.getElementsByClassName("left") //amarillo
        var Color6 = document.getElementsByClassName("back") //morado
        //Caja 1
        if(caja1 == 1){ColorCaja1 = "hsla(0, 100%, 50%, 1)";}
        if(caja1 == 2){ColorCaja1 = "hsla(240, 100%, 50%, 1)"}
        if(caja1 == 3){ColorCaja1 = "hsla(300, 100%, 50%, 1)"}
        if(caja1 == 4){ColorCaja1 = "hsla(120, 100%, 50%, 1)"}
        if(caja1 == 5){ColorCaja1 = "hsla(60, 100%, 50%, 1)"}
        if(caja1 == 6){ColorCaja1 = "hsla(180, 100%, 50%, 1)"}
        //Caja 2
        if(caja2 == 1){ColorCaja2 = "hsla(0, 100%, 50%, 1)"}
        if(caja2 == 2){ColorCaja2 = "hsla(240, 100%, 50%, 1)"}
        if(caja2 == 3){ColorCaja2 = "hsla(300, 100%, 50%, 1)"}
        if(caja2 == 4){ColorCaja2 = "hsla(120, 100%, 50%, 1)"}
        if(caja2 == 5){ColorCaja2 = "hsla(60, 100%, 50%, 1)"}
        if(caja2 == 6){ColorCaja2 = "hsla(180, 100%, 50%, 1)"}
        //Caja 3
        if(caja3 == 1){ColorCaja3 = "hsla(0, 100%, 50%, 1)"}
        if(caja3 == 2){ColorCaja3 = "hsla(240, 100%, 50%, 1)"}
        if(caja3 == 3){ColorCaja3 = "hsla(300, 100%, 50%, 1)"}
        if(caja3 == 4){ColorCaja3 = "hsla(120, 100%, 50%, 1)"}
        if(caja3 == 5){ColorCaja3 = "hsla(60, 100%, 50%, 1)"}
        if(caja3 == 6){ColorCaja3 = "hsla(180, 100%, 50%, 1)"}
        $(".right").css("backgroundColor",ColorCaja1 );
        $(".bottom").css("backgroundColor",ColorCaja1 );
        $(".top").css("backgroundColor",ColorCaja2 );
        $(".front").css("backgroundColor",ColorCaja2 );
        $(".left").css("backgroundColor",ColorCaja3 );
        $(".back").css("backgroundColor",ColorCaja3 );
        valorCaja1Principal = ColorCaja1;
        valorCaja2Principal = ColorCaja2;
        valorCaja3Principal = ColorCaja3;

    }else if(nivel == 3){
        valorCaja1Principal = "hsla(120, 100%, 50%, 1)";
        valorCaja2Principal = "hsla(240, 100%, 50%, 1)";
        valorCaja3Principal = "hsla(0, 100%, 50%, 1)";
        valorCaja4Principal = "hsla(300, 100%, 50%, 1)";
        valorCaja5Principal = "hsla(60, 100%, 50%, 1)";
        valorCaja6Principal = "hsla(180, 100%, 50%, 1)";

    }else{
        alert("Error");
        
    }
        
    
}
function ReiniciandoVariables(){
    eliminarDiv();
    temporal = false;
    numAleatorio = 0;
    Puntos = 0;
    vidas = 3;
    ValorTiempoActual = 0;
    valorTiempo = 0;   
    DivTotal = -1;
    rondaAnterior = 3;
    rondaAnterior2 = 0;
    SaltoLinea = -1;  
    EspacioLinea = -1; 
    RondaTexto = 0;  
    ronda = 0;
    JugandoAhora = true;
    jugGanado = false;
}
function DivsMovimientoCreacion(){
    DivTotal +=1;
        if(DivTotal == rondaAnterior){
            rondaAnterior2 = DivTotal+1;
            DivTotal = 1;
            if(rondaAnterior == 2){
                DivTotal = 0;
            }
            
            moviendoDiv('Salto De Linea')
            console.log("Ronda algo")

            // AL FINAL
            rondaAnterior = rondaAnterior2
        }else{
            moviendoDiv('xd')
        }
}
function eliminarDiv(){
    document.getElementById('Puntostt').innerHTML = "Puntos : 0";
    $('.Div1').remove();
    $('.Div2').remove();
    $('.Div3').remove();
    $('.Div4').remove();
    $('.Div5').remove();
    $('.Div6').remove();
    $('.Div7').remove();
    $('.Div8').remove();
    $('.Div9').remove();
    $('.Div10').remove();
    $('.Div11').remove();
    $('.Div12').remove();
    $('.Div13').remove();
    $('.Div14').remove();
    $('.Div15').remove();
    $('.Div16').remove();
    $('.Div17').remove();
    $('.Div18').remove();
    $('.Div19').remove();
    $('.Div20').remove();
    $('.Div21').remove();
    $('.Div22').remove();
    $('.Div23').remove();
    $('.Div24').remove();
    $('.Div25').remove();
    $('.Div26').remove();
    $('.Div27').remove();
    $('.Div28').remove();
    $('.Div29').remove();
    $('.Div30').remove();
    $('.Div31').remove();
    $('.Div32').remove();
    $('.Div33').remove();
    $('.Div34').remove();
    $('.Div35').remove();


}
function QuitandoBuscandoCaras(){
    eliminarDiv();

}

function comparacionDiv(){

    numAleatorio = Math.round(Math.random() * (6 - 1) + 1);
    
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
}

function transformacionManualDiv(){
    lEspacioLinea = EspacioLinea +1;
    $('.Div' + (ronda)).css("margin-left",(64 + (lEspacioLinea*3))+"%");
    $('.Div' + (ronda)).css("margin-top",(-510 + (SaltoLinea*40))+"px");
    $('.Div' + (ronda)).css("transform","scale(0.15,0.15)");
    $('.Div' + (ronda)).css("transition","all 0.4s");
    $('.Div' + (ronda)).css("border","4px solid white");
    $('.Div' + (ronda)).css("opacity","0.4");
}