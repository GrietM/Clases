//console.log('hola')
//const array = [0,5,4,8]
//console.log('array sin push:'+  array)
//array.push(17)
//console.log('array con push:' +  array)

//console.log('array sin pop:'+  array)
//array.pop()
//console.log('array con pop:' +  array)

//const ultimo = array2.pop()
//console.log (ultimo)


//const array2 = ['manzana', 'pera', 'banana', 'melón']
//console.log(array2)
//array2.shift()
//console.log(array2)
//array2.unshift('hola')
//console.log(array2)

//const array3=array2.slice(1,3)

//console.log(array3)
//array2.splice(1,3) // saca los elementos que le pido por parametro, achica el arreglo.
//array2.splice(1,0,'hola') // agrega hola en la posicion que le digo, me agranda el arreglo. Usar siempre cero como segundo parámetro.
//console.log(array2)
//console.log('la posicion del elemento buscado es:' + array2.indexOf('griet')) // si escribo un valor que no esta en el arreglo el resultado arrojado va a ser -1!


//const set = array2.filter(function(item){
//    return item > 'banana'
//})
//console.log(set)

// me falto el ejemplo de Filter!

//array2.forEach(function(item)
//{
//    console.log(item)
//})

//const set = array2.map(function(item)
//{
  //  return item + ' test'
//})

//console.log(set)

//const set = array2.map (item => item + 'test')
//console.log (set)

// esta utlima es una otra fomra de sintaxis de funcione. la flecha => hace las veces de return

const numericArray = [1,2,3,4];
let Sumados = numericArray.map(function(item)
{
    return item+1
})

console.log(Sumados);
