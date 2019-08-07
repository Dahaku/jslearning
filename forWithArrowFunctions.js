var David = {
    nombre: "David",
    apellido: "Romero",
    edad: 27,
    peso: 74
 }

 console.log(`Al inicio del año ${David.nombre} pesa ${David.peso}kg`)

 const MODIFICACION_PESO = 0.2
 const DIAS_DEL_AÑO = 365

 const aumentarDePeso = (Persona) => Persona.peso += MODIFICACION_PESO
 const adelgazar = (Persona) => Persona.peso -= MODIFICACION_PESO

 for (var i = 1; i<=DIAS_DEL_AÑO; i++) {
    var random = Math.random()
    if (random < 0.25){
        aumentarDePeso(David)
    } else if (random < 0.5){
        adelgazar(David)
    } else {
        //no pasa nada
    }
 }



 console.log(`Al final del año ${David.nombre} pesa ${David.peso.toFixed(2)}kg`)