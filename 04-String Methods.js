
/* This is not very common
const product2 = String('Monitor');
const product3 = new String('Monitor');
console.log(typeof product2);
console.log(typeof product3)

*/
const tweet = "Learning JS"; 
const product2 = "monitor HD";


console.log(tweet.length);
console.log(product2);

//IndexOf (returns position)
console.log(tweet.indexOf("JS"));
console.log(tweet.indexOf("Learning")); // When the result is -1 it means that the specificed character or string was not found

//Includes (returns a boolean)
console.log(tweet.includes('rice'));
console.log(tweet.includes('JS'));