const kart = [
    { name: 'Monitor ', price : 500},
    { name: 'Tv 50" ', price : 700},
    { name: 'PC gamer ', price : 10000},
    { name: 'Mouse ', price : 300},
    { name: 'keyboard ', price : 400},
    { name: 'Cooler', price : 900}
];

// for each 

// kart.forEach(element => console.log(element.name));

console.log('Map');
// map
// kart.map(element => console.log(element.name));

//                      Difference between mao and foreach

const array1 = kart.forEach(element => element.name);
const array2 = kart.map(element => element.name);

const array3 = kart.map(element => `${element.name} - ${element.price}`);


console.log(array1); // this will be undefined
console.log(array2); // map allows you to create a new array
console.log(array3);