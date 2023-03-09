
const productName = '20" Monitor';
const price = 300;
const available = true;

// Objects
const product = {
    productName : '20" Monitor',
    price : 300,
    available : true
}



// console.log(product.price);
// console.log(product.productName);
// console.log(product.available);

// console.log(product['price']);


//                      Modifying an object
product.imagen = 'image.jpg'; // Adding a new propertie

delete product.available; // Deleting a propertie

console.log(product);


