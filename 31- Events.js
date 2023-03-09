const button = document.querySelector('#button');

button.addEventListener('click', function(){
    Notification.requestPermission()
        .then(result => console.log(`The result is ${result}`))
});

if(Notification.permission === 'granted'){
    new Notification('This is a notification', {
        icon: 'a.jpg',
        body:'lets go'
    })
}