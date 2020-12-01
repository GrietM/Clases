
console.log('EJERCICIO 6: Dado un arreglo de números enteros encuentre la menor suma posible entre ellos \n')

const minArray = [7,4,2,3];
let index=0;

function minSum (array){
let index=0;
let newArray =[];

while (index < array.length-1){
    let suma = array[index] + array[index+1]
    newArray[index] = suma
    index++
}
return Math.min.apply(null,newArray)
}

console.log('La mínima suma entre dos elementos consecutivos es: ' , minSum(minArray))

// ASI COMO ESTA PLANTEADO O SIRVE PARA ENCONTRAR LA MINIMA SUMA DE OS ELEMENTOS DEL ARREGLO. ESTÁ PENSADO PARA CASOS EN QUE BUSQUE LA MÍNIMA SUMA ENTRE DOS ELEMENTOS CONSECUTIVOS.