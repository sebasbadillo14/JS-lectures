const authenticUser = new Promise((resolve, reject) => {
    const auth = false;

    if(auth){
        resolve('Authentic user'); // El promise se cumple
    } else {
        reject('You are not an user'); // EL promise no se cumple
    }
});

authenticUser
    .then(function(result){
    console.log(result);
    })
    .catch(function(error){
        console.log(error);
    })


// In the promises are 3 posible values
// Pending : It has not been acomplished but is not rejected
// Filfilled : Its done
// Rejected : it has been rejected0