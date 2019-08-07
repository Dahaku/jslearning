function Persona(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function () {
    return this.altura > 1.80
}

var David = new Persona('David','Romero', 1.81)
var Rosa = new Persona('Rosa', 'Camús', 1.62)
David.saludar()
Rosa.saludar()