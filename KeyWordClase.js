class Persona{
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }

    saludar() {
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
    }

    soyAlto() {
        return this.altura > 1.80
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura){
        super(nombre,apellido,altura)
    }

    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/@`)
    }
}




var David = new Persona('David','Romero', 1.81)
var Rosa = new Desarrollador('Rosa', 'Camús', 1.56)
David.saludar()
Rosa.saludar()