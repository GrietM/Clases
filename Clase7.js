const list = [
    {firstName: 'Sofía', country: 'Argentina'},
    {firstName: 'Lukas', country: 'Croatia'}
]

const newList = list.map((item)=> item.firstName)

console.log(newList)

//const newList2 = list.map()

const newPerson = (name, age, work) => {
    const person = {
        personName: name,
        personAge: age,
        personWork: work
    }
    return person
}

const testPerson = newPerson ('lucas', 128, 'sovos')
console.log(newPerson)

function warnTheSheep(array){
    ​
        var aux
        for (let i = 0; i < array.length; i++) {
            if(array[i]=='wolf' ){
                if(i+1!=array.length){
                //identifico la posicion de la oveja    
                let sheep=i+1
                //Arreglo el orden considerado
                sheep=array.length-sheep   
                aux='Hey! Oveja numero '+ sheep + '! El lobo esta cerca!'
                }
                else{
                aux='No sigas comiendo ovejas!' 
                }
            }
        }
        return aux
        }
        
    ​
        var array=["sheep","sheep","wolf", "sheep","sheep"] ;
        var result8=warnTheSheep(array);
        console.log(result8);