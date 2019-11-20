const { ipcRenderer } = require('electron')

$(function() {
    // Sidebar toggle behavior
    $('#PaginaPrincipal').on('click', function() {
      $('.VentanaDeJuegos, .Ingreso').toggleClass('active');
    });
    
    // Abre menu configuracion
    $('#MenuConfiguracion').on('click', function() {
      ipcRenderer.send('config-toggle')
    })
});