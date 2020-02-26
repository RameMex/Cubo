function NuevoJuego(nivelAct) {
	ReiniciandoVariables()
	nivel = nivelAct
	seleccionDeCara()
	var e = true
	var Perdio = false
	var GanoRondas = false
	var numDivs = 1
	if (JuegoQueSeJuega == 'BuscandoCaras') {
		cuerpoJuego(vidas, Puntos)
	} else if (JuegoQueSeJuega == 'SimonDice') {
		cuerpoJuegoSimonDice(vidas, Puntos)
	}
}

function vidasMover() {
	$('.corazon').css('margin-top', '30px')
	$('#Corazon1').css('margin-top', '25px')
	$('#Corazon2').css('margin-top', '-25px')
	$('#Corazon3').css('margin-top', '-25px')
}
function quitarVidas() {
	if (vidas == 2) {
		$('#Corazon3').css('margin-top', '-85px')
	} else if (vidas == 1) {
		$('#Corazon2').css('margin-top', '-85px')
	} else if (vidas == 0) {
		$('#Corazon1').css('margin-top', '-85px')
	}
}

/* Funcion para detectar que cara esta en la parte superior */
function CaraADetectar() {
	var dato = 0
	var Color1
	var Color2
	var Color3
	var Color4
	var Color5
	var Color6

	var Color1width
	var Color2width
	var Color3width
	var Color4width
	var Color5width
	var Color6width

	Color1 = document.getElementById('right') //verde
	Color2 = document.getElementById('bottom') //azul
	Color3 = document.getElementById('top') //rojo
	Color4 = document.getElementById('front') //celeste
	Color5 = document.getElementById('left') //amarillo
	Color6 = document.getElementById('back') //morado

	Color1width = Color1.getBoundingClientRect().width
	Color2width = Color2.getBoundingClientRect().width
	Color3width = Color3.getBoundingClientRect().width
	Color4width = Color4.getBoundingClientRect().width
	Color5width = Color5.getBoundingClientRect().width
	Color6width = Color6.getBoundingClientRect().width

	var Color1height = Color1.getBoundingClientRect().height
	var Color2height = Color2.getBoundingClientRect().height
	var Color3height = Color3.getBoundingClientRect().height
	var Color4height = Color4.getBoundingClientRect().height
	var Color5height = Color5.getBoundingClientRect().height
	var Color6height = Color6.getBoundingClientRect().height

	if (
		Color1width >= 180 &&
		Color1width <= 190 &&
		Color1height >= 180 && Color1height <= 190
	) {
		dato = 1
		console.log('Verde')
	} else if (
		Color2width >= 180 &&
		Color2width <= 190 &&
		Color2height >= 180 && Color2height <= 190
	) {
		dato = 2
		console.log('Azul')
	} else if (
		Color3width >= 180 &&
		Color3width <= 190 &&
		Color3height >= 180 && Color3height <= 190
	) {
		dato = 3
		console.log('Rojo')
	} else if (
		Color4width >= 180 &&
		Color4width <= 190 &&
		Color4height >= 180 && Color4height <= 190
	) {
		dato = 4
		console.log('Cian')
	} else if (
		Color5width >= 180 &&
		Color5width <= 190 &&
		Color5height >= 180 && Color5height <= 190
	) {
		dato = 5
		console.log('Amarillo')
	} else if (
		Color6width >= 180 &&
		Color6width <= 190 &&
		Color6height >= 180 && Color6height <= 190
	) {
		dato = 6
		console.log('Morado')
	}else{
		dato = 0
	}

	return dato
}
