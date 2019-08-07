var David = {
    nombre: "David",
    apellido: "Romero",
    edad: 27,
    peso: 74
 }

 console.log(`Al inicio del año ${David.nombre} pesa ${David.peso}kg`)

 const MODIFICACION_PESO = 0.3
 const DIAS_DEL_AÑO = 365

 const aumentarDePeso = (Persona) => Persona.peso += MODIFICACION_PESO
 const adelgazar = (Persona) => Persona.peso -= MODIFICACION_PESO

 const comeMucho = () => Math.random() < 0.3
 const realizaDeporte = () => Math.random() < 0.4

 const META = David.peso - 3
 var dias = 0

 while(David.peso > META){
    if (comeMucho()) {
        aumentarDePeso(David)
    }

    if (realizaDeporte()) {
        adelgazar(David)
    }

    dias += 1
 }




 console.log(`Pasaron ${dias} días hasta que ${David.nombre} adelgazó`)