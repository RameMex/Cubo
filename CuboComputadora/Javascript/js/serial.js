const SerialPort = require('serialport')
const Readline = SerialPort.parsers.Readline
var valorxs;
const parser = new Readline({ delimiter: '\n' })
var port
var cont = 0;
var x = 0;
var y = 0;
var z = 0;

function conectarPuerto(puerto) {
	try {
		port = new SerialPort(puerto, { autoOpen: false, baudRate: 115200 })
		port.open(function(err) {
			if (err) {
				ipcRenderer.send('cubo_err')
			} else {
				port.pipe(parser)
				ipcRenderer.send('cubo_ok')
				console.log('exito conexion cubo')
			}
		})
	} catch(err) {
		console.log(err)
		ipcRenderer.send('cubo_err')
	}
}

parser.on('data', function (data) {
	if (data == 1){
		console.log('Verde')
		updateRotate(0, -90, 0)
	} else if (data == 2){
		console.log('Azul')
		updateRotate(90, 0, 0)
	} else if (data == 3){
		console.log('Rojo')
		updateRotate(-90, 0, 0)
	} else if (data == 4){
		console.log('Cian')
		updateRotate(0, 0, 0)
	} else if (data == 5){
		console.log('Amarillo')
		updateRotate(0, 90, 0)
	} else if (data == 6){
		console.log('Morado')
		updateRotate(0, -180, 0)
	}
	console.log(data)
	
	if(cont == 0){
		x = Number(data)
		cont++
	}
	else if(cont == 1){
		y = Number(data)
		cont++
	}
	else if(cont == 2){
		z = Number(data)
		cont =0
		updateRotate(x,y,z)
	}
	console.log(x)
	console.log(y)
	console.log(z)
})

function updateRotate(x, y, z) {
	$('#cube').attr(
		'style',
		'transform: rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg);'
	)
	var vars = document.getElementById('cube')
	console.log(vars)
}
ipcRenderer.on('conectar_cubo', (event, arg) => {
	conectarPuerto(arg)
})

ipcRenderer.on('custom_Cmd', (event, arg) => {
	port.write(arg)
})

ipcRenderer.on('cambio_Brillo', (event, arg) => {
	var cmd = "<2," + arg + ">"
	console.log(cmd)
	port.write(cmd)
})
