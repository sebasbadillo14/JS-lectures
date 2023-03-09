// POO before, the old way

/** Object Literal */ 
const product  = {
    name : 'Tablet',
    price : 500
}


/*Object Constructor*/
//this is a class
function Product(/*Parameters*/ name = "", price = "", availabe = true) {
    this.name = name; // The this. is important as fuck
    this.price = price;
    this.availabe = availabe;                  
}
// Prototypes allows you to create functions that will be used only on a specied class of objects
// prototypes are god

Product.prototype.productFormat = function(){ // this will be a method
    return `The product ${this.name} has a value of $${this.price}`;
}


function Client(/*Parameters*/ name = "", lastname = "") {
    this.name = name; // The this. is important as fuck
    this.lastname = lastname;
                  
}
Client.prototype.clientFormat = function(){
    return `Dear ${this.name} ${this.lastname}, we are pleased to have you back `;
}

const client1 = new Client('sebas', 'badillo');
const product2 = new Product(/*Arguments*/ 'Monitor Full HD 4k', 900);
const product3 = new Product(/*Arguments*/ 'laptop', 500, false);
const product4 = new Product(/*Arguments*/ 'pc', 700);
const product5 = new Product(/*Arguments*/ 'Celphone', 100, false);


// function productFormat(product){
//     return `The pruct ${product.name} has a value of $${product.price}`;
// }
// let print = productFormat(product5);


console.log(client1);
console.log(client1.clientFormat());

console.log(product5);
console.log(product5.productFormat())







