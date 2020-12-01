const list = [
   {firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C'},
   {firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript'},
   {firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'America', age: 29, language: 'Ruby'},
   {firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C'}
]

function returnLanguage(array){
    let newList = {}
    array.forEach(element => {
    if (newList[element.language]){
        newList[element.language]++
    }    
    else {
        newList[element.language]=1
    }
    return console.log(newList)
    });
}

returnLanguage(list)
