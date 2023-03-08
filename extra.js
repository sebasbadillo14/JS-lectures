// Promises, Asyn and await

const data = [{
    id: 1,
    title: 'Iron Man',
    year:2008
},{
    id: 2,
    title: 'Spiderman: Homecoming',
    year: 2017
},{
    id: 3,
    title: 'Avengers: Endgame',
    year: 2019
}];

// const getData = () => data;
// console.log(getData());

const getData = () => {
    return new Promise(function(resolve, reject){
        if(data.length === 0){
            return reject( new Error('There is no data'));
        }
        setTimeout(() =>{
            resolve(data);
        }, 5000)
    })
    
};

// console.log(getData());
// getData()
//     .then((datos) => console.log(datos));
async function fetching (){
    try {
        const fetchedData = await getData();
        console.log(fetchedData);
    } catch (error) {
        console.log(error);
    }
    
}
fetching();