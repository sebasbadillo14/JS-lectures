//  Joining together to objects

const product = {
    productName : '20" Monitor',
    price : 300,
    available : true
}

const measure = {
    weight : '1kg',
    size : '1m'
}

const newProduct ={...product, ...measure}

console.log(product);
console.log(newProduct);