// Structure control
const score = 19000;

// if (score === 1000) { // The === is more strict than ==, the === will analize value and data type
//     console.log('The score is 1000');
// } else {
//     console.log('The score is not 1000');
// }

// if (score !== 1000) { // The === is more strict than ==, the === will analize value and data type
//     console.log('The score is not 1000');
// } else {
//     console.log('The score is  1000');
// }


// const cash = 1000;
// const kart = 800;

// if (cash >= kart) {
//     console.log('You can buy the product');
// } else {
//     console.log('You can`t buy the product');
// }


const rol = 'EDITOR';
if (rol === 'ADMIN'){
    console.log('Full Access');
} else if (rol === 'EDITOR'){
    console.log('You can edit');
} else {
    console.log('You don`t have access');
}