// Array methods


const months = ['January', 'February', 'March', 'April', 'May'];

const kart = [
    { name: 'Monitor ', price : 500},
    { name: 'Tv 50" ', price : 700},
    { name: 'PC gamer ', price : 10000},
    { name: 'Mouse ', price : 300},
    { name: 'keyboard ', price : 400},
    { name: 'Cooler', price : 900}
];

// forEach
months.forEach(function(month){
    //console.log(month);
    if(month == 'May'){
        console.log(month);
    }
})

// includes
let result = months.includes('december'); //this works in linear arrays like months
//                                            But it wont be a good idea to use it, in an array like kart


// .some() , is ideal for an array type object
result = kart.some(function(product){
    return product.name === 'Cooler '
})

// Arrow function
result = kart.some(product => product.name === 'Cooler ');

// Reduce
result = kart.reduce( function(total, product){
    return total+ product.price
}, 0 )

// filter
result = kart.filter( function(product){
    return product.name !== 'Cooler'
})



console.log(result);
