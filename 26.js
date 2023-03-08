// This in JavaScript


const reservation = {
    name : 'Sebas',
    lastname : 'Badillo',
    total : 5000,
    paid : false,
    info : function(){ // this.name won´t work with an arrow function because the arrow function will point to the window
        console.log(`The cliente ${this.name} booked and his current debt is ${this.total} `);
    },
    payment : function(){
        this.paid = true;
    }

}

console.log(reservation);

reservation.info();
reservation.payment();
console.log(reservation);