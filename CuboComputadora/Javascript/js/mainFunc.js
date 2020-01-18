function NuevoJuego(nivelAct){
    ReiniciandoVariables();
    nivel = nivelAct;
    seleccionDeCara();
    var e = true;
    var Perdio = false;
    var GanoRondas = false;
    var numDivs = 1;
    if(JuegoQueSeJuega == 'BuscandoCaras'){
        cuerpoJuego(vidas,Puntos);
    }else if(JuegoQueSeJuega == 'SimonDice'){
        cuerpoJuegoSimonDice(vidas,Puntos);
    }
    
   
}

function vidasMover(){
    $(".corazon").css("margin-top",'30px' );
    $("#Corazon1").css("margin-top",'25px' );
    $("#Corazon2").css("margin-top",'-25px' );
    $("#Corazon3").css("margin-top",'-25px' );

}
function quitarVidas(){
    if(vidas == 2){
        $("#Corazon3").css("margin-top",'-85px' );
    }else if(vidas == 1){
        $("#Corazon2").css("margin-top",'-85px' );
    }else if(vidas == 0){
        $("#Corazon1").css("margin-top",'-85px' );
    }
}