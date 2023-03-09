'use strict'; // Run js in strict mode

const product = {
    productName : '20" Monitor',
    price : 300,
    available : true
}
Object.seal(product); // With seal you can modify the existent parameters
console.log(Object.isSealed(product));

/*
Object.freeze();  Won't allow any modification to the object not even modify, or delete
delete product.price
product.imagen = 'image.jpg';

*/
product.price = 400;

//product.imagen = 'image.jpg'; // This won´t work and it is a bad practice

console.log(product);