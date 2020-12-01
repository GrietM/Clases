const list = [
    {firstName: 'Noah', country: 'Switzerland', continent:'Europe', age:19, languaje:'JavaScript'},
    {firstName: 'Carla', country: 'Tahití', continent:'Oceanía', age:28, languaje:'JavaScript'},
    {firstName: 'María', country: 'Taiwán', continent:'Asia', age:35, languaje:'HTML'},
    {firstName: 'Ramiro', country: 'Tajikistán', continent:'Asia', age:30, languaje:'CSS'},
]
// la forma en la que yo lo hice 
function countByContinent (object, origen){
    let counter = 0;
    let index = 0;
        while (index < object.length){
            if(object[index].continent === origen){
                counter ++
            }
            index ++
    }
    return console.log ('La cantidad de asistentes del continente', origen , 'es:', counter) 
   
}
/*
function countByContinent (object,origen){
    return object.filter(item => item.continent === origen).length
}
*/   
/*
function countByContinent (object, origen){
    let counter = 0;
     for (index=0; index < object.length; index++){
        if(object[index].continent === origen){
        counter ++
        }
        }
    return console.log ('La cantidad de asistentes del continente', origen , 'es:', counter,'\n -> el valor de index está en:', index) }
   */

  
countByContinent(list,'Europe')
countByContinent(list,'Asia')
countByContinent(list,'Oceanía')

//console.log(list[1].continent)
