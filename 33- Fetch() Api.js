async function obtainEmployees (){

    const url = 'js/list.json'; // you have to put the name of the folder that contains the .json
    // fetch(url)
    //     .then(result => {
    //         return result.json();
    //     })
    //     .then( data =>{
    //         console.log(data);
    //         console.log(data.Employee);
            
    //         const { Employee } = data;

    //         // Employee.forEach(element => {
    //         //     console.log(element);
    //         //     //document.querySelector('.contenido').textContent += element.name;
    //         // });
    //         // // Another way
    //         // // data.Employee.forEach(element => {
    //         // //     console.log(element);
    //         // // });
    const result = await fetch(url); // Here I use 2 awaits because one deppends on the other
    console.log(result)
    const data = await result.json();
    console.log(data);
    console.log(data.Employee)
            
    //     })
};
obtainEmployees();