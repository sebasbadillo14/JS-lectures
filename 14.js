'use strict';

// Arrays

const numbers = [10 ,20 ,30 ,40 ,50];
//Add a value 
// numbers[5] =60; this is not very common

numbers.push(60, 70, 80, 90); // this will add the elemnt at the end of the array    .push
numbers.unshift(-30, -20, -10); // this will add the elemnts at the begenning of the array   .unshift

console.table(numbers);
 
/*
This is used but not very used
const months = new Array('January', 'February', 'March', 'April', 'May', 'June' );
*/
const months = ['January', 'February', 'March', 'April', 'May', 'June' ];
//months.pop(); // This will cut thr last element of the array
//months.shift(); // This will cut thr first element of the array
//months.splice(2, 1); //the fist value is the index of the element you want to cut, and the second is how many items you want to delete afer that
console.table(months);


// In the real world is not very good loocking to modify arrays
// Rest operator

const newArray=[...months, 'July'];
const newArray2=['december', ...months];
console.log(newArray);
console.log(newArray2);







const array = ['hello', 10 , true, 'yes', null, {name: 'sebas', proffession: 'freelancer, enterprenuer'}, [1,2,3]];
// console.log(array);




// Acceding to array values
// console.log(numbers[2]);
// console.log(numbers[50]); //undefined

// Arrays Extension
// console.log(months.length)


// ForEach
// months.forEach(function(month){
//     console.log(month);
// });

