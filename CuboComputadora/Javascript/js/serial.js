const SerialPort = require('serialport');
const Readline = SerialPort.parsers.Readline


const port = new SerialPort('COM7', {
    baudRate: 38400
})
const parser = new Readline({
	delimiter: '\n'
})
port.pipe(parser)

// Read data that is available but keep the stream in "paused mode"
// port.on('readable', function () {
//     console.log('Data:', port.read())
// })

// Switches the port into "flowing mode"
parser.on('data', function (data) {
	if (data == 1){
		console.log('Verde')
	} else if (data == 2){
		console.log('Azul')
	} else if (data == 3){
		console.log('Rojo')
	} else if (data == 4){
		console.log('Cian')
	} else if (data == 5){
		console.log('Amarillo')
	} else if (data == 6){
		console.log('Morado')
	}
})
