var David = {
    nombre: "David",
    apellido: "Romero",
    edad: 28,
    peso: 74,
    altura: 1.81,
    cantidadDeLibros: 20
 }

 var Rosa = {
    nombre: "Rosa",
    apellido: "Camús",
    edad: 27,
    peso: 82,
    altura: 1.56,
    cantidadDeLibros: 30
 }

 var Kira = {
    nombre: "Kira",
    apellido: "RoCa",
    edad: 20,
    peso: 22.75,
    altura: 1.2,
    cantidadDeLibros: 1
 }

 var personas = [David, Rosa]


for(var i = 0; i < personas.length; i++){
    console.log(`${personas[i].nombre} pesa ${personas[i].peso}`)
}

const esAlta = ({altura}) => altura > 1.8

var personasAltas = personas.filter(esAlta)

//var personasAltas = personas.filter(function (persona){
//    return persona.altura > 1.8
//})

const pasarAlturaACms = persona => {
    //persona.altura = persona.altura * 100
    return{
        ...persona,
        altura:persona.altura * 100
    }
} 

var personasCms = personas.map(pasarAlturaACms)


const reducer = (acum, {cantidadDeLibros}) => acum + cantidadDeLibros 

var totalDeLibros = personas.reduce(reducer, 0)



console.log(`En total todos tienen ${totalDeLibros} libros`)


















