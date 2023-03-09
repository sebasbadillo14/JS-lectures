// Object with Methods


// Properties methods
const player = {
    play : function(id = 0){
        console.log(`Playing song, id: ${id}`);
    },
    stop : function(){
        console.log('stopping...')
    },
//     deleteSong : function(id){   // You can define a method from outside like down this
//         console.log(`Deleting song with id: ${id}`) 
//     },
    createPlayList : function (name = '123') {
        console.log(`creating playlist named : ${name}`)
    },

    playingPlayList : function (name = "123") {
        console.log(`playing the playlist named : ${name}`)
    },

}

player.deleteSong = function(id){
    console.log(`Deleting song with id: ${id}`)
}


console.log(player.play(30));
console.log(player.stop());
console.log(player.deleteSong(30));
console.log(player.createPlayList('Time To Level Up'));
console.log(player.playingPlayList('Time To Level Up'));
console.log(player.playingPlayList());