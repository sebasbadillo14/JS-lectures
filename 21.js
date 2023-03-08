'use strict'
// Arrow functions

// Expressions of the function,    You can use arrow functions only in this way

const sum2 = (n1, n2) => console.log(n1 + n2);
sum2(5, 10);


const learning = (tecnology = " ") => {
    console.log(`Learning ${tecnology}`);
}

learning('JavaScript');


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
months.forEach(month =>{
    //console.log(month);
    if(month == 'May'){
        console.log(month);
    }
});


let result;
// In array functions its implicit the return
// .some() , is ideal for an array type object
result = kart.some( product => product.name === 'Cooler');



// Reduce
result = kart.reduce( (total, product) =>  total + product.price, 0 )


// filter
result = kart.filter( (product) => product.name !== 'Cooler');

result = kart.filter( (product) => product.price > 500 );
console.log(result);






