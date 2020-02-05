# LED Datos

El programa recibe comandos de tipo <id_cmd, {, parametros}>

## Lista de comandos disponibles
### Modificar color de un LED:
`<1, #LED, Color_HEX>`

#LED tiene un rango de 1-6  
Color_HEX es el color deseado en Hexadecimal

### Modificar intensidad de brillo:
`<2, #Brillo>`

#Brillo toma valores de 0-255  
Este comando es utilizado en el slider de brillo en la ventana de configuracion del programa principal.
