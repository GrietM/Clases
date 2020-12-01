//***********EJERCICIO 1*************//

console.log('EJERCICIO 1: Funcion que reciba un número en un parámetro y devuelva "par" o "impar" dependiendo del valor que tome \n');

let numeroIngresado = prompt("Ingrese un número")
let numeroIngresado2 = (Number.parseFloat(numeroIngresado));
//convierte el numero ingresado por teclado de string a number para poder hacer operaciones mat con el.

function parImpar (paridad)
{
 let numero = paridad/2;
  if (numero%1==0)
    var mensaje = '\n El numero ingresado es par \n'
    else
    var mensaje = '\n El numero ingresado es impar \n';
  return mensaje
    }

console.log(parImpar(numeroIngresado2));
prompt('Presione la tecla ENTER para continuar \n');
console.clear();

// podría agregar la condición de que el numero sea distitno de cero o 
//***********EJERCICIO 2*************//

console.log('EJERCICIO 2: Función que reciba un número y devuelva su opuesto \n');

function opuestos(number)
{
  var opposite = (number - 2*number);
  return opposite}

let numIngresado3 = prompt ('Ingrese un número')
  console.log('\n El opuesto del número ingresado es: ' + opuestos(numIngresado3)+ '\n');
prompt('Presione la tecla ENTER para continuar \n');
console.clear();

//***********EJERCICIO 3*************//

console.log('EJERCICIO 3: Función de dos parámetros (X e Y) que repita X veces el string Y \n');

function repiteTexto(texto,veces)
{
  var contador = 1;
  while (contador<=veces)
  {
    contador ++
    var resultado = texto
    console.log(resultado);
  }
};

let texto1 = prompt('Escriba un mensaje \n');
let veces1 = prompt ('\n Elija el número de veces que desea que su mensaje se repita \n');
console.log ('\n A continuación se muestra lo solicitado: \n')
repiteTexto(texto1,veces1);
console.log ('\n FIN DEL EJERCICIO \n');
prompt('Presione la tecla ENTER para continuar \n');
console.clear();
