console.log('EJERCICIO 3: Función que calcule los impuestos (15%) dependiendo del gasto y lo escriba en consola\n');

function calculoImpuestos(gasto, impuesto)
{
var impuestos = impuesto*gasto;
return impuestos; 
}

var impuestosCalculados = calculoImpuestos(3000,0.15);
console.log('Los impuestos corresponden a $' + impuestosCalculados + '\n');
 
// me gustaria mejorar esta funcion para que tome el valor de gasto ingresado por consola y en funcion de eso calcule el impuesto. Ver Joel o Andrea.