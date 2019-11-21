const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline


// const port = new SerialPort('COM7', {
//     baudRate: 38400
// })
// const parser = new Readline({
// 	delimiter: '\n'
// })
// port.pipe(parser)

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
})

function updateRotate(x, y, z){
	$('#cube').attr('style', 'transform: rotateX(' + x + 'deg) rotateY(' + y + 'deg) rotateZ(' + z + 'deg);')
}