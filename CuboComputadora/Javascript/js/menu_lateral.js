const { ipcRenderer } = require('electron')
$(function() {
    // Sidebar toggle behavior
    $('#Juegos').on('click', function() {
      $('.barraJuegos,.navPrincipal').toggleClass('active');
    });
    $('#arrow').on('click', function() {
      $('.barraJuegos,.navPrincipal').toggleClass('active');
    });
    $('#valor1').on('click', function() {
      $('#caja3').toggleClass('active');
    });
    $('#botonJugar').on('click', function() {
          $('#caja1,#caja2,#caja3,#selectorNiveles,.barraJuegos').toggleClass('active');
          var  selectorNiveles = document.getElementById("selectorNiveles");
          var valorselectorNiveles = selectorNiveles.options[selectorNiveles.selectedIndex].value;
          var  caja1Color = document.getElementById("caja1");
          var valorCaja1Color = caja1Color.options[caja1Color.selectedIndex].value;
          var  caja2Color = document.getElementById("caja2");
          var valorCaja2Color = caja2Color.options[caja2Color.selectedIndex].value;
          var  caja3Color = document.getElementById("caja3");
          var valorCaja3Color = caja3Color.options[caja3Color.selectedIndex].value;
          if(valorselectorNiveles == 1){nuevoJuego(1,valorCaja1Color,valorCaja2Color,0);}
          if(valorselectorNiveles == 2){nuevoJuego(2,valorCaja1Color,valorCaja2Color,valorCaja3Color);}
          if(valorselectorNiveles == 3){nuevoJuego(3,0,0,0);}

    });
    $('#Buscando').on('click', function() {
      $('#caja1,#caja2,#caja3,#selectorNiveles').toggleClass('active');
    });
    $('#SimonDice').on('click', function() {
      $('#caja1,#caja2,#caja3,#selectorNiveles').toggleClass('active');
    });
    
  
    
    
    // Abre menu configuracion
    $('#MenuConfiguracion').on('click', function() {
      ipcRenderer.send('config-toggle')
    })
});


/*function NivelSelecion(){
  var selectBox = document.getElementById("selectorNiveles");
  var valorOpcion = selectBox.options[selectBox.selectedIndex].value;
  if(valorOpcion == 1){
    $('#caja1').toggleClass('cheked');
    $('#caja2').toggleClass('cheked');
    $('#caja3').toggleClass('cheked');
  }
  if(valorOpcion == 2){
    $('#caja1').toggleClass('cheked');
    $('#caja2').toggleClass('cheked');
    $('#caja3').toggleClass('active');
  }
  if(valorOpcion == 3){
    $('#caja1').toggleClass('active');
    $('#caja2').toggleClass('active');
    $('#caja3').toggleClass('active');
  }
  

}*/
