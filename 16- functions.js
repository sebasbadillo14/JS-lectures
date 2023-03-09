// hoisting, java is executed in 2 rounds
// in the first one are registrated the functions
// in the second they are executed

// functions

// Declaration
//                      form 1, you can call the function before declarating it
product();
function product(){
    console.log(10*10);
}


// Expressions of the function,         form 2 you can´t call the function before declaring it, this is kind of variable
sum2();
const sum2 = function(){
    console.log(2+2);
}


// IIFE, this function is not re-usable and also its auto called
// They are usefeul to protect variables
(function(){
    console.log('this is a function')
})();

