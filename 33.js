function obtainEmployees (){

    const url = 'js/list.json'; // you have to put the name of the folder that contains the .json
    fetch(url)
        .then(result => {
            console.log(result)
        })
};
obtainEmployees();