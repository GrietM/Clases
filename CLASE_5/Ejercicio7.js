const array = [9 , 5 , 10 , 2 , 24 , -1];
let product = [];

function adjacentElementsProduct(array){
for (i=0; i< array.length-1; i++){
    result = (array[i]*array[i+1])
    product[i] = result //armo el nuevo arreglo con cada uno de los productos entre consecutivos
    }
    //console.log(product)
    product.sort() // ordeno los elementos del nuevo arreglo de menor a mayor
    //console.log(product)
    console.log('\n El mínimo producto entre consecutivos es ' , product[0])
}

adjacentElementsProduct(array)