//Colores
var imgColor1 = 'hsla(0, 100%, 60%, 1)'
var imgColor2 = 'hsla(240, 100%, 60%, 1)'
var imgColor3 = 'hsla(300, 100%, 60%, 1)'
var imgColor4 = 'hsla(120, 100%, 60%, 1)'
var imgColor5 = 'hsla(260, 100%, 60%, 1)'
var imgColor6 = 'hsla(180, 100%, 60%, 1)'
//Animales
var imgVaca = 'vaca.svg'
var imgPuerco = 'puerco.svg'
var imgCaballo = 'caballo.svg'
var imgDelfin = 'delfin.svg'
var imgTigre = 'tigre.svg'
var imgPerro = 'perro.svg'
//Figuras
var imgRombo = 'rombo.svg'
var imgCuadrado = 'cuadrado.svg'
var imgCirculo = 'circulo.svg'
var imgEstrella = 'estrella.svg'
var imgTriangulo = 'triangulo.svg'
var imgRectangulo = 'rectangulo.svg'
//Fechas
var imgDiciembre = 'diciembre.svg'
var imgMayo = 'mayo.svg'
var imgOctubre = 'octubre.svg'
var imgMarzo = 'marzo.svg'
var imgAgosto = 'agosto.svg'
var imgAbril = 'abril.svg'


var direccionImagenes = 'img/imgCaras/' // Relativa al img\imgCaras\caballo.svg

var colorCarasFondo1 ='';
var colorCarasFondo2 = '';
var colorCarasFondo3 = '';
var colorCarasFondo4 = '';
var colorCarasFondo5 = '';
var colorCarasFondo6 = ''; 

function seleccionDeCara(){
    var valorSelectorCaras = document.getElementById('selectorCaras');
    var valorselectorNiveles = document.getElementById('selectorNiveles');
    var valorcaja1 = document.getElementById('caja1');
    var valorcaja2 = document.getElementById('caja2');
    var valorcaja3 = document.getElementById('caja3');
    var Animal1 = '';
    var Animal2 = '';
    var Animal3 = '';

    var Color1 = '';
    var Color2 = '';
    var Color3 = '';

    var Figuras1 = '';
    var Figuras2 = '';
    var Figuras3 = '';

    var Fechas1 = '';
    var Fechas2 = '';
    var Fechas3 = '';
    // 1 = Colores , 2 = Animales , 3 = Figuras , 4 = Fechas;

    /*
        Colores :
                Rojo =          1
                Azul =          2
                Morado =        3
                Verde =         4
                Amarillo =      5
                Celeste =       6
        Animales :
                Vaca =          1
                Puerco =        2
                Caballo =       3
                Delfin =        4
                Tigre =         5
                Perro =         6
        Figuras :
                Rombo =         1
                Cuadrado =      2
                Circulo =       3
                Estrella =      4
                Triangulo =     5
                Recatangulo =   6        
        Fechas : 
                Diciembre =     1
                Mayo =          2
                Octubre =       3
                Marzo =         4
                Agosto =        5
                Abril =         6
    */
    if(valorSelectorCaras.value == 1){
        Color1 = detectarValorSelectorCaras()[0];
        Color2 = detectarValorSelectorCaras()[1];
        Color3 = detectarValorSelectorCaras()[2];

        if(valorselectorNiveles.value == 1){
            
             // Animal 1
             $('#right').css('background-color', Color1);
             $('#right').css('background-repeat','no-repeat');

             $('#bottom').css('background-color', Color1);
             $('#bottom').css('background-repeat','no-repeat');
             
             $('#top').css('background-color', Color1);
             $('#top').css('background-repeat','no-repeat');
             //Animal 2
             $('#front').css('background-color', Color2);
             $('#front').css('background-repeat','no-repeat');
             
             $('#left').css('background-color', Color2);
             $('#left').css('background-repeat','no-repeat');
             
             $('#back').css('background-color', Color2);
             $('#back').css('background-repeat','no-repeat');

           
        }else if(valorselectorNiveles.value == 2){
            
             $('#right').css('background-color', Color1);
             $('#right').css('background-repeat','no-repeat');

             $('#bottom').css('background-color', Color1);
             $('#bottom').css('background-repeat','no-repeat');
             
             $('#top').css('background-color', Color2);
             $('#top').css('background-repeat','no-repeat');
             //Animal 2
             $('#front').css('background-color', Color2);
             $('#front').css('background-repeat','no-repeat');
             
             $('#left').css('background-color', Color3);
             $('#left').css('background-repeat','no-repeat');
             
             $('#back').css('background-color', Color3);
             $('#back').css('background-repeat','no-repeat');

        }else if(valorselectorNiveles.value == 3){
             $('#right').css('background-color', Color1);
             $('#right').css('background-repeat','no-repeat');

             $('#bottom').css('background-color', Color2);
             $('#bottom').css('background-repeat','no-repeat');
            
             $('#top').css('background-color', Color3);
             $('#top').css('background-repeat','no-repeat');
             //Animal 2
             $('#front').css('background-color', Color4);
             $('#front').css('background-repeat','no-repeat');
            
             $('#left').css('background-color', Color5);
             $('#left').css('background-repeat','no-repeat');
            
             $('#back').css('background-color', Color6);
             $('#back').css('background-repeat','no-repeat');
        }
  
    }else if(valorSelectorCaras.value == 2){
        Animal1 = detectarValorSelectorCaras()[0];
        Animal2 = detectarValorSelectorCaras()[1];
        Animal3 = detectarValorSelectorCaras()[2];

        if(valorselectorNiveles.value == 1){
            
             // Animal 1
             $('#right').css('background-image','url('+direccionImagenes + Animal1+')');
             $('#right').css('background-repeat','no-repeat');

             $('#bottom').css('background-image','url('+direccionImagenes + Animal1+')');
             $('#bottom').css('background-repeat','no-repeat');
             
             $('#top').css('background-image','url('+direccionImagenes + Animal1+')');
             $('#top').css('background-repeat','no-repeat');
             //Animal 2
             $('#front').css('background-image','url('+direccionImagenes + Animal2+')');
             $('#front').css('background-repeat','no-repeat');
             
             $('#left').css('background-image','url('+direccionImagenes + Animal2+')');
             $('#left').css('background-repeat','no-repeat');
             
             $('#back').css('background-image','url('+direccionImagenes + Animal2+')');
             $('#back').css('background-repeat','no-repeat');

           
        }else if(valorselectorNiveles.value == 2){
            // Animal 1
            $('#right').css('background-image','url('+direccionImagenes + Animal1+')');
            $('#right').css('background-repeat','no-repeat');

            $('#bottom').css('background-image','url('+direccionImagenes + Animal1+')');
            $('#bottom').css('background-repeat','no-repeat');
            //Animal 2
            $('#top').css('background-image','url('+direccionImagenes + Animal2+')');
            $('#top').css('background-repeat','no-repeat');
            
            $('#front').css('background-image','url('+direccionImagenes + Animal2+')');
            $('#front').css('background-repeat','no-repeat');
            //Animal 3
            $('#left').css('background-image','url('+direccionImagenes + Animal3+')');
            $('#left').css('background-repeat','no-repeat');
            
            $('#back').css('background-image','url('+direccionImagenes + Animal3+')');
            $('#back').css('background-repeat','no-repeat');

        }else if(valorselectorNiveles.value == 3){
             // Vaca
             $('#right').css('background-image','url('+direccionImagenes + imgVaca+')');
             $('#right').css('background-repeat','no-repeat');
             //Puerco
             $('#bottom').css('background-image','url('+direccionImagenes + imgPuerco+')');
             $('#bottom').css('background-repeat','no-repeat');
             //Caballo
             $('#top').css('background-image','url('+direccionImagenes + imgCaballo+')');
             $('#top').css('background-repeat','no-repeat');
             //Delfin
             $('#front').css('background-image','url('+direccionImagenes + imgDelfin+')');
             $('#front').css('background-repeat','no-repeat');
             //Tigre
             $('#left').css('background-image','url('+direccionImagenes + imgTigre+')');
             $('#left').css('background-repeat','no-repeat');
             //Perro
             $('#back').css('background-image','url('+direccionImagenes + imgPerro+')');
             $('#back').css('background-repeat','no-repeat');
        }


    }else if(valorSelectorCaras.value == 3){
        Figuras1 = detectarValorSelectorCaras()[0];
        Figuras2 = detectarValorSelectorCaras()[1];
        Figuras3 = detectarValorSelectorCaras()[2];

        if(valorselectorNiveles.value == 1){
            
             // Animal 1
             $('#right').css('background-image','url('+direccionImagenes + Figuras1+')');
             $('#right').css('background-repeat','no-repeat');

             $('#bottom').css('background-image','url('+direccionImagenes + Figuras1+')');
             $('#bottom').css('background-repeat','no-repeat');
             
             $('#top').css('background-image','url('+direccionImagenes + Figuras1+')');
             $('#top').css('background-repeat','no-repeat');
             //Animal 2
             $('#front').css('background-image','url('+direccionImagenes + Figuras2+')');
             $('#front').css('background-repeat','no-repeat');
             
             $('#left').css('background-image','url('+direccionImagenes + Figuras2+')');
             $('#left').css('background-repeat','no-repeat');
             
             $('#back').css('background-image','url('+direccionImagenes + Figuras2+')');
             $('#back').css('background-repeat','no-repeat');

           
        }else if(valorselectorNiveles.value == 2){
            // Animal 1
            $('#right').css('background-image','url('+direccionImagenes + Figuras1+')');
            $('#right').css('background-repeat','no-repeat');

            $('#bottom').css('background-image','url('+direccionImagenes + Figuras1+')');
            $('#bottom').css('background-repeat','no-repeat');
            //Animal 2
            $('#top').css('background-image','url('+direccionImagenes + Figuras2+')');
            $('#top').css('background-repeat','no-repeat');
            
            $('#front').css('background-image','url('+direccionImagenes + Figuras2+')');
            $('#front').css('background-repeat','no-repeat');
            //Animal 3
            $('#left').css('background-image','url('+direccionImagenes + Figuras3+')');
            $('#left').css('background-repeat','no-repeat');
            
            $('#back').css('background-image','url('+direccionImagenes + Figuras3+')');
            $('#back').css('background-repeat','no-repeat');

        }else if(valorselectorNiveles.value == 3){
             // Vaca
             $('#right').css('background-image','url('+direccionImagenes + imgRombo+')');
             $('#right').css('background-repeat','no-repeat');
             //Puerco
             $('#bottom').css('background-image','url('+direccionImagenes + imgCuadrado+')');
             $('#bottom').css('background-repeat','no-repeat');
             //Caballo
             $('#top').css('background-image','url('+direccionImagenes + imgCirculo+')');
             $('#top').css('background-repeat','no-repeat');
             //Delfin
             $('#front').css('background-image','url('+direccionImagenes + imgEstrella+')');
             $('#front').css('background-repeat','no-repeat');
             //Tigre
             $('#left').css('background-image','url('+direccionImagenes + imgTriangulo+')');
             $('#left').css('background-repeat','no-repeat');
             //Perro
             $('#back').css('background-image','url('+direccionImagenes + imgRectangulo+')');
             $('#back').css('background-repeat','no-repeat');
        }

    }else if(valorSelectorCaras.value == 4){
        Fechas1 = detectarValorSelectorCaras()[0];
        Fechas2 = detectarValorSelectorCaras()[1];
        Fechas3 = detectarValorSelectorCaras()[2];

        if(valorselectorNiveles.value == 1){
            
             // Animal 1
             $('#right').css('background-image','url('+direccionImagenes + Fechas1+')');
             $('#right').css('background-repeat','no-repeat');

             $('#bottom').css('background-image','url('+direccionImagenes + Fechas1+')');
             $('#bottom').css('background-repeat','no-repeat');
             
             $('#top').css('background-image','url('+direccionImagenes + Fechas1+')');
             $('#top').css('background-repeat','no-repeat');
             //Animal 2
             $('#front').css('background-image','url('+direccionImagenes + Fechas2+')');
             $('#front').css('background-repeat','no-repeat');
             
             $('#left').css('background-image','url('+direccionImagenes + Fechas2+')');
             $('#left').css('background-repeat','no-repeat');
             
             $('#back').css('background-image','url('+direccionImagenes + Fechas2+')');
             $('#back').css('background-repeat','no-repeat');

           
        }else if(valorselectorNiveles.value == 2){
            // Animal 1
            $('#right').css('background-image','url('+direccionImagenes + Fechas1+')');
            $('#right').css('background-repeat','no-repeat');

            $('#bottom').css('background-image','url('+direccionImagenes + Fechas1+')');
            $('#bottom').css('background-repeat','no-repeat');
            //Animal 2
            $('#top').css('background-image','url('+direccionImagenes + Fechas2+')');
            $('#top').css('background-repeat','no-repeat');
            
            $('#front').css('background-image','url('+direccionImagenes + Fechas2+')');
            $('#front').css('background-repeat','no-repeat');
            //Animal 3
            $('#left').css('background-image','url('+direccionImagenes + Fechas3+')');
            $('#left').css('background-repeat','no-repeat');
            
            $('#back').css('background-image','url('+direccionImagenes + Fechas3+')');
            $('#back').css('background-repeat','no-repeat');

        }else if(valorselectorNiveles.value == 3){
             // Vaca
             $('#right').css('background-image','url('+direccionImagenes + imgDiciembre+')');
             $('#right').css('background-repeat','no-repeat');
             //Puerco
             $('#bottom').css('background-image','url('+direccionImagenes + imgMayo+')');
             $('#bottom').css('background-repeat','no-repeat');
             //Caballo
             $('#top').css('background-image','url('+direccionImagenes + imgOctubre+')');
             $('#top').css('background-repeat','no-repeat');
             //Delfin
             $('#front').css('background-image','url('+direccionImagenes + imgMarzo+')');
             $('#front').css('background-repeat','no-repeat');
             //Tigre
             $('#left').css('background-image','url('+direccionImagenes + imgAgosto+')');
             $('#left').css('background-repeat','no-repeat');
             //Perro
             $('#back').css('background-image','url('+direccionImagenes + imgAbril+')');
             $('#back').css('background-repeat','no-repeat');
        }

    }else{
        alert("A ocurrido un error");
    }
}

function PonerTextoCaja(){
    var caja1 = document.getElementById('caja1')
    var caja2 = document.getElementById('caja2')
    var caja3 = document.getElementById('caja3')
    var selectorCaras = document.getElementById('selectorCaras')

    if(selectorCaras.value == 1){
        // Caja 1 Sin texto
        caja1[1].innerText = ''
        caja1[2].innerText = ''
        caja1[3].innerText = ''
        caja1[4].innerText = ''
        caja1[5].innerText = ''
        caja1[6].innerText = ''
        // Caja 2 Sin texto
        caja2[1].innerText = ''
        caja2[2].innerText = ''
        caja2[3].innerText = ''
        caja2[4].innerText = ''
        caja2[5].innerText = ''
        caja2[6].innerText = ''
        // Caja 3 Sin texto
        caja3[1].innerText = ''
        caja3[2].innerText = ''
        caja3[3].innerText = ''
        caja3[4].innerText = ''
        caja3[5].innerText = ''
        caja3[6].innerText = ''

    }else if(selectorCaras.value == 2){
        // Caja 1 Animales
        caja1[1].innerText = 'Vaca'
        caja1[2].innerText = 'Puerco'
        caja1[3].innerText = 'Caballo'
        caja1[4].innerText = 'Delfin'
        caja1[5].innerText = 'Tigre'
        caja1[6].innerText = 'Perro'
        // Caja 2 Animales
        caja2[1].innerText = 'Vaca'
        caja2[2].innerText = 'Puerco'
        caja2[3].innerText = 'Caballo'
        caja2[4].innerText = 'Delfin'
        caja2[5].innerText = 'Tigre'
        caja2[6].innerText = 'Perro'
        // Caja 3 Animales
        caja3[1].innerText = 'Vaca'
        caja3[2].innerText = 'Puerco'
        caja3[3].innerText = 'Caballo'
        caja3[4].innerText = 'Delfin'
        caja3[5].innerText = 'Tigre'
        caja3[6].innerText = 'Perro'

    }else if(selectorCaras.value == 3){
        // Caja 1 Figuras
        caja1[1].innerText = 'Rombo'
        caja1[2].innerText = 'Cuadrado'
        caja1[3].innerText = 'Circulo'
        caja1[4].innerText = 'Estrella'
        caja1[5].innerText = 'Triangulo'
        caja1[6].innerText = 'Recatangulo'
        // Caja 2 Figuras
        caja2[1].innerText = 'Rombo'
        caja2[2].innerText = 'Cuadrado'
        caja2[3].innerText = 'Circulo'
        caja2[4].innerText = 'Estrella'
        caja2[5].innerText = 'Triangulo'
        caja2[6].innerText = 'Recatangulo'
        // Caja 3 Figuras
        caja3[1].innerText = 'Rombo'
        caja3[2].innerText = 'Cuadrado'
        caja3[3].innerText = 'Circulo'
        caja3[4].innerText = 'Estrella'
        caja3[5].innerText = 'Triangulo'
        caja3[6].innerText = 'Recatangulo'
        
    }else if(selectorCaras.value == 4){
        caja1[1].innerText = 'Diciembre'
        caja1[2].innerText = 'Mayo'
        caja1[3].innerText = 'Octubre'
        caja1[4].innerText = 'Marzo'
        caja1[5].innerText = 'Agosto'
        caja1[6].innerText = 'Abril'
        // Caja 2 Fechas
        caja2[1].innerText = 'Diciembre'
        caja2[2].innerText = 'Mayo'
        caja2[3].innerText = 'Octubre'
        caja2[4].innerText = 'Marzo'
        caja2[5].innerText = 'Agosto'
        caja2[6].innerText = 'Abril'
        // Caja 3 Fechas
        caja3[1].innerText = 'Diciembre'
        caja3[2].innerText = 'Mayo'
        caja3[3].innerText = 'Octubre'
        caja3[4].innerText = 'Marzo'
        caja3[5].innerText = 'Agosto'
        caja3[6].innerText = 'Abril'
    }
}

function detectarValorSelectorCaras(){
    var valorSelectorCaras = document.getElementById('selectorCaras');
    var valorselectorNiveles = document.getElementById('selectorNiveles');
    var valorcaja1 = document.getElementById('caja1');
    var valorcaja2 = document.getElementById('caja2');
    var valorcaja3 = document.getElementById('caja3');
    if(valorSelectorCaras.value == 1){
        var Color1 = '';
        var Color2 = '';
        var Color3 = '';
        if(valorcaja1.value == 1 ){Color1 = imgColor1;}
        if(valorcaja1.value == 2 ){Color1 = imgColor2;}
        if(valorcaja1.value == 3 ){Color1 = imgColor3;}
        if(valorcaja1.value == 4 ){Color1 = imgColor4;}
        if(valorcaja1.value == 5 ){Color1 = imgColor5;}
        if(valorcaja1.value == 6 ){Color1 = imgColor6;}

        if(valorcaja2.value == 1 ){Color2 = imgColor1;}
        if(valorcaja2.value == 2 ){Color2 = imgColor2;}
        if(valorcaja2.value == 3 ){Color2 = imgColor3;}
        if(valorcaja2.value == 4 ){Color2 = imgColor4;}
        if(valorcaja2.value == 5 ){Color2 = imgColor5;}
        if(valorcaja2.value == 6 ){Color2 = imgColor6;}

        if(valorcaja3.value == 1 ){Color3 = imgColor1;}
        if(valorcaja3.value == 2 ){Color3 = imgColor2;}
        if(valorcaja3.value == 3 ){Color3 = imgColor3;}
        if(valorcaja3.value == 4 ){Color3 = imgColor4;}
        if(valorcaja3.value == 5 ){Color3 = imgColor5;}
        if(valorcaja3.value == 6 ){Color3 = imgColor6;}


        if(valorselectorNiveles.value == 1){
            return [Color1,Color2,valorSelectorCaras.value];

        }else if(valorselectorNiveles.value == 2){
            return [Color1,Color2,Color3,valorSelectorCaras.value];
            
        }else if(valorselectorNiveles.value == 3){
            return [imgColor1,imgColor2,imgColor3,imgColor4,imgColor5,imgColor6,valorSelectorCaras.value];
            
        }
        
        
    }else if (valorSelectorCaras.value == 2){
        var Animal1 = '';
        var Animal2 = '';
        var Animal3 = '';

        if(valorcaja1.value == 1 ){Animal1 = imgVaca;}
        if(valorcaja1.value == 2 ){Animal1 = imgPuerco;}
        if(valorcaja1.value == 3 ){Animal1 = imgCaballo;}
        if(valorcaja1.value == 4 ){Animal1 = imgDelfin;}
        if(valorcaja1.value == 5 ){Animal1 = imgTigre;}
        if(valorcaja1.value == 6 ){Animal1 = imgPerro;}

        if(valorcaja2.value == 1 ){Animal2 = imgVaca;}
        if(valorcaja2.value == 2 ){Animal2 = imgPuerco;}
        if(valorcaja2.value == 3 ){Animal2 = imgCaballo;}
        if(valorcaja2.value == 4 ){Animal2 = imgDelfin;}
        if(valorcaja2.value == 5 ){Animal2 = imgTigre;}
        if(valorcaja2.value == 6 ){Animal2 = imgPerro;}

        if(valorcaja3.value == 1 ){Animal3 = imgVaca;}
        if(valorcaja3.value == 2 ){Animal3 = imgPuerco;}
        if(valorcaja3.value == 3 ){Animal3 = imgCaballo;}
        if(valorcaja3.value == 4 ){Animal3 = imgDelfin;}
        if(valorcaja3.value == 5 ){Animal3 = imgTigre;}
        if(valorcaja3.value == 6 ){Animal3 = imgPerro;}

        if(valorselectorNiveles.value == 1){
            return [Animal1,Animal2,valorSelectorCaras.value];
        }else if(valorselectorNiveles.value == 2){
            return [Animal1,Animal2,Animal3,valorSelectorCaras.value];
        }else if(valorselectorNiveles.value == 3){
            return [imgVaca,imgPuerco,imgCaballo,imgDelfin,imgTigre,imgPerro,valorSelectorCaras.value];
            
        }
        

        

    }else if (valorSelectorCaras.value == 3){
        var Figuras1 = '';
        var Figuras2 = '';
        var Figuras3 = '';

        if(valorcaja1.value == 1 ){Figuras1 = imgRombo;}
        if(valorcaja1.value == 2 ){Figuras1 = imgCuadrado;}
        if(valorcaja1.value == 3 ){Figuras1 = imgCirculo;}
        if(valorcaja1.value == 4 ){Figuras1 = imgEstrella;}
        if(valorcaja1.value == 5 ){Figuras1 = imgTriangulo;}
        if(valorcaja1.value == 6 ){Figuras1 = imgRectangulo;}

        if(valorcaja2.value == 1 ){Figuras2 = imgRombo;}
        if(valorcaja2.value == 2 ){Figuras2 = imgCuadrado;}
        if(valorcaja2.value == 3 ){Figuras2 = imgCirculo;}
        if(valorcaja2.value == 4 ){Figuras2 = imgEstrella;}
        if(valorcaja2.value == 5 ){Figuras2 = imgTriangulo;}
        if(valorcaja2.value == 6 ){Figuras2 = imgRectangulo;}

        if(valorcaja3.value == 1 ){Figuras3 = imgRombo;}
        if(valorcaja3.value == 2 ){Figuras3 = imgCuadrado;}
        if(valorcaja3.value == 3 ){Figuras3 = imgCirculo;}
        if(valorcaja3.value == 4 ){Figuras3 = imgEstrella;}
        if(valorcaja3.value == 5 ){Figuras3 = imgTriangulo;}
        if(valorcaja3.value == 6 ){Figuras3 = imgRectangulo;}

        if(valorselectorNiveles.value == 1){
            return [Figuras1,Figuras2,valorSelectorCaras.value];
        }else if(valorselectorNiveles.value == 2){
            return [Figuras1,Figuras2,Figuras3,valorSelectorCaras.value];
        }else if(valorselectorNiveles.value == 3){
            return [imgRombo,imgCuadrado,imgCirculo,imgEstrella,imgTriangulo,imgRectangulo,valorSelectorCaras.value];
            
        }
        

        

        
    }else if (valorSelectorCaras.value == 4){
        var Fechas1 = '';
        var Fechas2 = '';
        var Fechas3 = '';

        if(valorcaja1.value == 1 ){Fechas1 = imgDiciembre;}
        if(valorcaja1.value == 2 ){Fechas1 = imgMayo;}
        if(valorcaja1.value == 3 ){Fechas1 = imgOctubre;}
        if(valorcaja1.value == 4 ){Fechas1 = imgMarzo;}
        if(valorcaja1.value == 5 ){Fechas1 = imgAgosto;}
        if(valorcaja1.value == 6 ){Fechas1 = imgAbril;}

        if(valorcaja2.value == 1 ){Fechas2 = imgDiciembre;}
        if(valorcaja2.value == 2 ){Fechas2 = imgMayo;}
        if(valorcaja2.value == 3 ){Fechas2 = imgOctubre;}
        if(valorcaja2.value == 4 ){Fechas2 = imgMarzo;}
        if(valorcaja2.value == 5 ){Fechas2 = imgAgosto;}
        if(valorcaja2.value == 6 ){Fechas2 = imgAbril;}

        if(valorcaja3.value == 1 ){Fechas3 = imgDiciembre;}
        if(valorcaja3.value == 2 ){Fechas3 = imgMayo;}
        if(valorcaja3.value == 3 ){Fechas3 = imgOctubre;}
        if(valorcaja3.value == 4 ){Fechas3 = imgMarzo;}
        if(valorcaja3.value == 5 ){Fechas3 = imgAgosto;}
        if(valorcaja3.value == 6 ){Fechas3 = imgAbril;}

        
        if(valorselectorNiveles.value == 1){
            return [Fechas1,Fechas2,valorSelectorCaras.value];
        }else if(valorselectorNiveles.value == 2){
            return [Fechas1,Fechas2,Fechas3,valorSelectorCaras.value];
        }else if(valorselectorNiveles.value == 3){
            return [imgDiciembre,imgMayo,imgOctubre,imgMarzo,imgAgosto,imgAbril,valorSelectorCaras.value];
            
        }
        

        
        
    }
}