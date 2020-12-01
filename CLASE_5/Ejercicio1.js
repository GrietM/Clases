
console.log('EJERCICIO 1: Funcion que elimine siempre el primer elemento de un arreglo \n');

const array= [1,2,3,4] ;
const array1 = ['a','b','c','d','e'];
const array2 = ['W']; 

function deleteFirst(input)
{
  if (input.length ==1)
 console.log ('usted ha ingresado un arreglo con un único elemento, el resultado es un arreglo vacío! ')
const newArray = input.slice(1) 
// dejo abierto el limite superior para que copie t lo que haya a la derecha de la primera posicion sin importar cual sea el tamaño del arreglo.
return newArray
};

console.log (array);
console.log(deleteFirst(array)+'\n');

console.log (array1);
console.log(deleteFirst(array1)+'\n');

console.log (array2);
console.log(deleteFirst(array2));
