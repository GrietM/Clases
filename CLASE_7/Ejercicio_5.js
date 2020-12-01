// Ejercicio 5: Necesitamos saber si hay programadores de cierto lenguaje. Funcion que devuelva T o F al preguntar por un determinado lenguaje.

const list = [
    { firstName: 'Emma', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
    { firstName: 'Piotr', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
    { firstName: 'Jayden', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
  ];

function findLanguage(array,language){
   let found = array.find(function(item){
    return (item.language === language)
})
console.log(found)
if (found !== undefined){
    return console.log('TRUE')
} else {
    return console.log('FALSE')
}
}

findLanguage(list,'JavaScript')

/*
  function languageToF(array,language){
    array.forEach(element => {
        if (element.language === language){
        return console.log('TRUE')}
        else {
            return console.log('FALSE')
        }
    });  
    
    }

    languageToF(list,'Ruby')
    */
   // AL USAR FOR EACH ME DEVUELVE LA RESPUESTA PARA CADA ELEMENTO