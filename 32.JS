// Async /await

function downloadNewClient(){
    return new Promise(resolve =>{
        console.log('Downloading clients');
        setTimeout( ()=>{
            resolve(' The clients has been downloaded');
        }, 5000);
    });
}

function downloadLastRequests(){
    return new Promise(resolve =>{
        console.log('Downloading requests');
        setTimeout( ()=>{
            resolve(' The requests has been downloaded');
        }, 3000);
    });
}



async function app(){
    try {
        // const result = await downloadNewClient(); // The two awaits is not a good solution because the one doesn´t deppend of the other
        // const requests = await downloadLastRequests(); // So the performance wont be the expected
        // console.log(result); // this code wil depend wheter or not the clients can be downloaded
        // console.log(requests); 

        const result = await Promise.all([downloadNewClient(), downloadLastRequests()]) // the two functions work at the same time
        // Promise.all is an array of functions with promises
        console.log(result[0]);
        console.log(result[1]);
    } catch (error) {
        console.log(error);
    }
}
app();

