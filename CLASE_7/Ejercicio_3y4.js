// Ejercicio 3 : Personalizar el mensaje para cada persona. Funcion que devuelva un array donde a cada objeto se le agrega la propiedad "greeting"

const list1 = [
    { firstName: 'Sofia', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
    { firstName: 'Madison', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
  ];

 function addGreeting (array){
  const newArray = array.map(function(item){
    item.greeting = ('Hi ' + item.firstName + ', what do you like the most about ' + item.language)
    return item
  })
  console.log(newArray)
}

addGreeting(list1)
