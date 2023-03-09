
const product = {
    productName : '20" Monitor',
    price : 300,
    available : true
}

// Old way
// const productPrice = product.price;
// const productName = product.productName;

// console.log(productPrice);
// console.log(productName);

// Destructuring Objects
const {price , productName } = product;


console.log(price);
console.log(productName);