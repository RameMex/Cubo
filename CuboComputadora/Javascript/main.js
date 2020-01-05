const { app, BrowserWindow, globalShortcut, ipcMain } = require('electron')

// Mantén una referencia global del objeto window, si no lo haces, la ventana 
// se cerrará automáticamente cuando el objeto JavaScript sea eliminado por el recolector de basura.
let win
let configWin

function createWindow () {
  // Crea la ventana del navegador.
  win = new BrowserWindow({
    width: 1200,
    height: 728,
    frame : false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('index.html')

  // Abre de Developer tools
  // win.webContents.openDevTools()
  
  // Emitido cuando la ventana es cerrada.
  win.on('closed', () => {
    // Elimina la referencia al objeto window, normalmente  guardarías las ventanas
    // en un vector si tu aplicación soporta múltiples ventanas, este es el momento
    // en el que deberías borrar el elemento correspondiente.
    win = null
  })

  // Creacion ventana de configuracion
  configWin = new BrowserWindow({
    parent: win, modal: true, show: false,
    width: 500,
    height: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  configWin.loadFile("html/config.html")

  ipcMain.on('config-toggle', function() {
    if (configWin.isVisible())
      configWin.hide()
    else
      configWin.show()
  })
}

// Este método será llamado cuando Electron haya terminado
// la inicialización y esté listo para crear ventanas del navegador.
// Algunas APIs pueden usarse sólo después de que este evento ocurra.
app.on('ready', createWindow)

// Sal cuando todas las ventanas hayan sido cerradas.
app.on('window-all-closed', () => {
  // En macOS es común para las aplicaciones y sus barras de menú
  // que estén activas hasta que el usuario salga explicitamente con Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }


})

app.on('activate', () => {
  // En macOS es común volver a crear una ventana en la aplicación cuando el
  // icono del dock es clicado y no hay otras ventanas abiertas.
  if (win === null) {
    createWindow()
  }
})

// En este archivo puedes incluir el resto del código del proceso principal de
// tu aplicación. También puedes ponerlos en archivos separados y requerirlos aquí.

ipcMain.on('ini_cubo', (event, arg) => {
	win.webContents.send('conectar_cubo', arg)
})

ipcMain.on('cubo_err', function() {
	configWin.webContents.send('cubo_err')
})

ipcMain.on('cubo_ok', function() {
	configWin.webContents.send('cubo_ok')
})

ipcMain.on('customCmd', (event, arg) => {
	win.webContents.send('custom_Cmd', arg)
})