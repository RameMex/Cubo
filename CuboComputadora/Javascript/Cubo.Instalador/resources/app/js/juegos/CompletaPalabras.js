var LineaPalabra
var Letras
var Letra1 = 'a'
var Letra2 = 'o'
var Letra3 = 's'
var Letra4 = 'z'
var Letra5 = 'd'
var Letra6 = 'f'
var Palabras
var Palabrass = [
    {
        "Palabras":[{
                "id":"1",
                "palabra":"OSO"
            },
            {
                "id":"2",
                "palabra":"HOLA"
            },
            {
                "id":"3",
                "palabra":"BARCO"
            },
            {
                "id":"4",
                "palabra":"PERRO"
            }
        ]
        
    }
]



//    return Palabras.responseJSON.Palabras

BuscandoLetra(Letra1,Letra2,Letra3,Letra4,Letra5,Letra6)

function BuscandoLetra(Letra1,Letra2,Letra3,Letra4,Letra5,Letra6){
    LineaPalabra = Palabrass[0].Palabras
    var id
    for(i in LineaPalabra ){
        Letras = LineaPalabra[i].palabra.split("")
        var idbool = false 
        for(x in Letras ){
            if(Letras[x] == Letra1 && idbool == false){
                id = LineaPalabra[i].id
                console.log(LineaPalabra[i].id)
                console.log(LineaPalabra[id-1].palabra)
                x = String(LineaPalabra[id-1].palabra).length
                idbool = true
                 
            }
            else if(Letras[x] == Letra2 && idbool == false){
                id = LineaPalabra[i].id
                console.log(LineaPalabra[i].id)
                console.log(LineaPalabra[id-1].palabra)
                x = String(LineaPalabra[id-1].palabra).length
                idbool = true
            }
            else if(Letras[x] == Letra3 && idbool == false){
                id = LineaPalabra[i].id
                console.log(LineaPalabra[i].id)
                console.log(LineaPalabra[id-1].palabra)
                x = String(LineaPalabra[id-1].palabra).length
                idbool = true
            }
            else if(Letras[x] == Letra4 && idbool == false){
                id = LineaPalabra[i].id
                console.log(LineaPalabra[i].id)
                console.log(LineaPalabra[id-1].palabra)
                x = String(LineaPalabra[id-1].palabra).length
                idbool = true
            }
            else if(Letras[x] == Letra5 && idbool == false){
                id = LineaPalabra[i].id
                console.log(LineaPalabra[i].id)
                console.log(LineaPalabra[id-1].palabra)
                x = String(LineaPalabra[id-1].palabra).length
                idbool = true
            }
            else if(Letras[x] == Letra6 && idbool == false){
                id = LineaPalabra[i].id
                console.log(LineaPalabra[i].id)
                console.log(LineaPalabra[id-1].palabra)
                x = String(LineaPalabra[id-1].palabra).length
                idbool = true
            }


        }
    }
        
}
