// function sum (num1 = 0, num2 = 0) {
//     return num1 + num2;
// }
// const result = sum(20,0);
// if ( result >= 10 ) {
//     console.log('High');

// }else{
//     console.log('low');
// }

let total = 0;

function addKart(price){
    //console.log(total);
    return total += price;
}

function taxCalculator(total){
    return 1.19 * total;
}


total = addKart(200);
total = addKart(200);
total = addKart(200);
total = addKart(200);
total = addKart(200);
total = addKart(900);

let finalPrice = taxCalculator(total);
console.log(total);
console.log(finalPrice);
console.log(`The final price is : $${finalPrice}`);