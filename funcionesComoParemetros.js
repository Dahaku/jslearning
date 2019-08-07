class Persona{
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar(fn) {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
        if (fn) {
            fn(this.nombre, this.apellido)
        }
    }

    soyAlto() {
        return this.altura > 1.80
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura){
        super(nombre,apellido,altura)
    }

    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
        if (fn) {
            fn(this.nombre, this.apellido, true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev){
        console.log(`Ah mira, no sabía que eras desarrollador@`)
    }
}



var David = new Persona('David','Romero', 1.81)
var Rosa = new Desarrollador('Rosa', 'Camús', 1.56)

David.saludar(responderSaludo)
Rosa.saludar(responderSaludo)