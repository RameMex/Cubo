const SerialPort = require('serialport')
const Readline = SerialPort.parsers.Readline

const parser = new Readline( {delimiter: '\n' })
var port

function conectarPuerto(puerto) {
	try {
		port = new SerialPort(puerto, { autoOpen: false, baudRate: 115200 })
		port.open(function(err) {
			if(err) {
				ipcRenderer.send('cubo_err')
			}
			else{
				port.pipe(parser)
				ipcRenderer.send('cubo_ok')
				console.log('exito conexion cubo')
			}
		})
	}
	catch {
		ipcRenderer.send('cubo_err')
	}
}

parser.on('data', function (data) {
	/*if (data == 1){
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
	}*/
	console.log(data)
	

})
function updateRotate(x, y, z){
	$('#cube').attr('style', 'transform: rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg);')
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