console.log("dentro config.js")

const { ipcRenderer } = require('electron')

var button = document.createElement('button')
button.textContent = "Cerrar"
button.addEventListener('click', function() {
    ipcRenderer.send("config-toggle")
})

document.body.appendChild(button)