
function sum1(number1, number2){ //number1 and number2 are parameters
    console.log(number1 + number2);
}
sum1(20, 30); //In the function they are called parameters but when the function is executed they are called arguments or real values
sum1(80, 30); 

const rest = function(n1 =0, n2 = 0){//these are default parameters, they are used when the arguments are not specified
    console.log(n1 -  n2);
}
rest(3,8);
rest();