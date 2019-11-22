console.log("dentro config.js")

const { ipcRenderer } = require('electron')
const SerialPort = require('serialport')
const Readline = SerialPort.parsers.Readline

var selPuertos = document.querySelector('#puertoCOM')
var btnCancelar = document.querySelector('#btnCancelar')
var btnAceptar = document.querySelector('#btnAceptar')
var btnRefresh = document.querySelector('#btnRefresh')
var btnConectar = document.querySelector('#btnConectar')
var lblConectar = document.querySelector('#lblConectar')

btnCancelar.addEventListener('click', function() {
    ipcRenderer.send("config-toggle")
})

btnRefresh.addEventListener('click', function() {
    selPuertos.innerHTML = ""

    SerialPort.list().then( function(ports) {
            ports.forEach( function(port) {
                var opt = document.createElement('option')
                opt.innerHTML = port.path
                selPuertos.appendChild(opt)
            })
        }
    )
})

btnConectar.addEventListener('click', function() {
	ipcRenderer.send("ini_cubo", selPuertos.value)
	
	btnConectar.classList.remove('btn-danger')
	btnConectar.classList.remove('btn-success')
	btnConectar.classList.add('btn-primary')

	lblConectar.innerHTML = 'Conectando'
})

ipcRenderer.on('cubo_err', function(){
	console.log('error al conectar el cubo')
	btnConectar.classList.remove('btn-primary')
	btnConectar.classList.remove('btn-success')
	btnConectar.classList.add('btn-danger')

	lblConectar.innerHTML = 'Error!'
})

ipcRenderer.on('cubo_ok', function() {
	btnConectar.classList.remove('btn-primary')
	btnConectar.classList.remove('btn-danger')
	btnConectar.classList.add('btn-success')

	lblConectar.innerHTML = ''
})