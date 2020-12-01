
console.log('EJERCICIO 4: Haga una funcion que reciba un número y retorne un arreglo del tamaño del número recibido cuyo contenido deben se rnumeros desde el cero hasta l numero recibido -1 \n');

let counter = 0
const size = 12
let initialArray=[0]

function arrayCreator(size)
{
while (initialArray.length < size)
{
    counter++
    initialArray.push(counter)
}
return initialArray
}

console.log(arrayCreator(size))
