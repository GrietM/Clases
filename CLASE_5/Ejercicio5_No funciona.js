
console.log('EJERCICIO 5: Funcion que identifique el unico numero diferente dentro de un arreglo \n')

const theArray = [1,1,1,1,5,1,1,1];

const res = theArray.find(function(index){
 return (theArray[index] =! theArray[index-1])
})
console.log (res)

/*
function findDifferent (array){
   let resultado = array.find(function(index){
      array[index] =! array [index-1]
   })
   return resultado
}*/
/*
function theFunction(array){
  const resultado = array.find (function(index){
   (array[index] =! array[index - 1])})
console.log(resultado)   
return resultado
}*/

//console.log(theArray)
//console.log(findDifferent(theArray))

