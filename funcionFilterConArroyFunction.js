var David = {
    nombre: "David",
    apellido: "Romero",
    edad: 28,
    peso: 74,
    altura: 1.81
 }

 var Rosa = {
    nombre: "Rosa",
    apellido: "Camús",
    edad: 27,
    peso: 82,
    altura: 1.56
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

console.log(personasAltas)
