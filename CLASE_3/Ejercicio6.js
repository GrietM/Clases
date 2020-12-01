console.log('EJERCICIO 2: Función que devuelva la multiplicacion de 2000*300 y lo escriba en la consola\n')

function calculadora ()
{
  var calculo = 2000*300;
  return calculo;
  }
var resultado = calculadora();

console.log('El resultado del cálculo solicitado es: '+ resultado + '\n')
console.log('El resultado del cálculo solicitado es: ' + calculadora() + '\n');
 

// acá podría omitir la declaracion de la variable resultado y directamente llamar en el console.log al return de la funcion. Lo dejo armado en una línea comentada.