class Mascota {
    constructor (tipo, raza, nombre, color, tamaño) {
        console.log('this linea 3:', this)
        this.petType = tipo,
        this.petRace = raza,
        this.petName = nombre,
        this.petColor = color,
        this.petSize = tamaño
        console.log('this linea 9:', this)
    } 
}
/*
class Mascota1 {
    petType ;
    petRace ;
    petName ;
    petColor ;
    petSize ;
    console.log('this linea 3:', this)
      this.petType = tipo,
      this.petRace = raza,
      this.petName = nombre,
      this.petColor = color,
      this.petSize = tamaño
    } 
}
*/
const gato = new Mascota ('gato', 'siames', 'Garfield', 'naranja', 'mediano')
console.log(gato)

const person = {
    name: 'Marce',
    age: 31,
    work: 'CNEA'
}

console.log(person)
person.phone =123456 //le puedo agregar propiedades asi de prepo!
person.name = 'Marcela Griet' // tambien puedo pisar los valores y redefinirlos

console.log(person)
console.log(person.age)
console.log(person.phone)


function test(object){
console.log(object)
console.log(object.age)
}

test(person)

Math.max.a