const { ipcRenderer } = require('electron')
const remote = require('electron').remote
var tiempoGeneral = 0
var tiempoGeneralNumero = 0
$(function() {
	$('.toolgif').toolgif()
})
$(function() {
	$('#cerrarDibujando').on('click', function() {
		ipcRenderer.send('Dibujar')
	})

	$('#cerrarbtn').on('click', function() {
		remote.getCurrentWindow().close()
	})
	$('#minimizarbtn').on('click', e => {
		remote.getCurrentWindow().minimize()
	})
	$('.barraJuegos').hover(
		function() {
			if ($('.barraJuegos').hasClass('active')) {
				$('#buscandoCarasNav,#simonDiceNav,#completaPalabraNav,#dibujandoNav').css(
					'opacity',
					'1'
				)
				$('#buscandoCarasNav,#simonDiceNav,#completaPalabraNav,#dibujandoNav').css(
					'transition',
					'all 0.1s'
				)
			}
		},
		function() {
			$('#buscandoCarasNav,#simonDiceNav,#completaPalabraNav,#dibujandoNav').css(
				'opacity',
				'0'
			)
			$('#buscandoCarasNav,#simonDiceNav,#completaPalabraNav,#dibujandoNavsss').css(
				'transition',
				'all 0.1s'
			)
		}
	)
	$('#Juegos').on('click', function() {
		$('.barraJuegos,.navPrincipal').toggleClass('active')
	})
	$('#arrow').on('click', function() {
		$('.barraJuegos,.navPrincipal').toggleClass('active')
	})
	$('#valor1').on('click', function() {
		$('#caja3').toggleClass('active')
	})
	$('#botonPrev').on('click', function() {
		seleccionDeCara()
	})
	$('#botonJugar').on('click', function() {
		if ($('.barraJuegos').hasClass('active')) {
			$('.barraJuegos').toggleClass('active')
		}
		if (!$('.Rondas').hasClass('active')) {
			$('.Rondas').toggleClass('active')
		}
		if (!$('.TextoVentanaJuego').hasClass('active')) {
			$('.TextoVentanaJuego').toggleClass('active')
		}
		$('#caja1,#caja2,#caja3,#selectorCaras,#selectorNiveles').toggleClass('active')
		var selectorNiveles = document.getElementById('selectorNiveles')
		var valorselectorNiveles =
			selectorNiveles.options[selectorNiveles.selectedIndex].value
		var caja1Color = document.getElementById('caja1')
		var valorCaja1Color = caja1Color.options[caja1Color.selectedIndex].value
		var caja2Color = document.getElementById('caja2')
		var valorCaja2Color = caja2Color.options[caja2Color.selectedIndex].value
		var caja3Color = document.getElementById('caja3')
		var valorCaja3Color = caja3Color.options[caja3Color.selectedIndex].value
		tiempoGeneral = document.getElementById('tiempoTexto').value
		tiempoGeneralNumero =Number(tiempoGeneral)
		if (valorselectorNiveles == 1) {
			NuevoJuego(1)
		}
		if (valorselectorNiveles == 2) {
			NuevoJuego(2)
		}
		if (valorselectorNiveles == 3) {
			NuevoJuego(3)
		}
		vidasMover()
	})
	$('#Buscando').on('click', function() {
		$(
			'#caja1,#caja2,#caja3,.TextoVentanaJuego,#selectorCaras,#selectorNiveles,.VentanaDeJuegos,.barraPuntos,.Rondas'
		).toggleClass('active')
		JuegoQueSeJuega = 'BuscandoCaras'
		if (ronda > 0) {
			$('.Div' + ronda).css('margin-left', '100%')
			if (!$('#caja1').hasClass('active')) {
				$('.Div' + ronda).css('margin-left', '75.5%')
			}
		}
	})

	/* SIMON DICE JUEGO */
	$('#SimonDice').on('click', function() {
		$('#caja1,#caja2,#caja3,.TextoVentanaJuego,#selectorCaras,#selectorNiveles,.VentanaDeJuegos,.barraPuntos,.Rondas').toggleClass('active')
		JuegoQueSeJuega = 'SimonDice'
	})

	// Abre menu configuracion
	$('#MenuConfiguracion').on('click', function() {
		ipcRenderer.send('config-toggle')
	})
	$('#Dibujando').on('click', function() {
		ipcRenderer.send('Dibujar')
	})
})

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
