const hero = {
    nombre: '' ,
    posicion: '00',
    vida: 100,
    dano: 5,
    experiencia:0
    // si escribo posición y daño no me los toma como propiedades de la clase sino como un string que fuera parte de la propiedad anterior.
}
const hero2 = {
    nombre: 'heroe',
    posicion: '00',
    vida: 100,
    dano: 5,
    experiencia:0
}    

function heroCreator(object,parameter){
    //console.log(object)
    if (object.nombre === ''){
        object.nombre = parameter
    return console.log(object)    
    } else{
    console.log(object)
    }
}

heroCreator(hero,'Marce')
heroCreator(hero2,'Marce')


