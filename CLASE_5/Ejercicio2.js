
console.log('EJERCICIO 2: Funcion que solo reciba arreglos de mas de 5 elementos y luego elimine los ultimos 3 \n');

const array= [1,2,3,4] ;
const array1 = ['a','b','c','d','e'];
const array2 = ['W']; 
const array3 = [1,2,3,4,5,6]
const array4 = [1,2,3,4,5,6,7,8,9,10]
const array5 = ['a','b','c','d','e','f','g','h']

function arraysBiggerThan5 (input1){
if (input1.length < 6 ) {
    return 'El arreglo ingresado tiene menos de 5 elementos'
  } else { 
      return input1.splice(0,input1.length-3)
    }
}

console.log('El arreglo a evaluar es:\n',array,'\n');
console.log(arraysBiggerThan5(array));

console.log('\n El arreglo a evaluar es:\n',array1,'\n');
console.log(arraysBiggerThan5(array1));

console.log('\n El arreglo a evaluar es:\n',array2,'\n');
console.log(arraysBiggerThan5(array2));

console.log('\n El arreglo a evaluar es:\n',array3,'\n');
console.log(arraysBiggerThan5(array3));

console.log('\n El arreglo a evaluar es:\n',array4,'\n');
console.log(arraysBiggerThan5(array4));

console.log('\n El arreglo a evaluar es:\n',array5,'\n');
console.log(arraysBiggerThan5(array5));
