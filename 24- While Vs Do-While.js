// for loop 

// for( let i = 0; i <= 10 ; i++){
//     console.log(i);
// }

// use ctrl + k + c
// for( let i = 0; i <= 10 ; i++){
//     if ((i % 2) === 0){
//         console.log(`The number ${i} is even `);
//     } else {
//         console.log(`The number ${i} is odd `);
//     }
// }

const kart = [
    { name: 'Monitor ', price : 500},
    { name: 'Tv 50" ', price : 700},
    { name: 'PC gamer ', price : 10000},
    { name: 'Mouse ', price : 300},
    { name: 'keyboard ', price : 400},
    { name: 'Cooler', price : 900}
];
// for ( let i = 0 ; i < kart.length ; i++){
//     console.log(kart[i].name);
// };


// While loop

// let i = 20 ;

// while( i < 10 ){
//     console.log(' From the while loop');

//     i++;
// }

//                                      Difference between While and Do while 
// while will analize first and  if the condition is accomplished then it will execute the code
// Do while, will first execute the code at least 1 time and then analize


// Do while loop

let i = 100;

do {
    console.log(i);
    
    i++;
} while ( i <10 );