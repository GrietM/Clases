console.log('EJERCICIO 3: Teniendo un arreglo numérico tenemos que sumarle un número (por parámetro) a cada elemento \n');

const numericArray = [1,2,3,4];
let Sumados = numericArray.map(function(item)
{
    return item+1
})
console.log('El arreglo original es:' , numericArray , '\n')
console.log('El nuevo arreglo es:' , Sumados);
