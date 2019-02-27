//Functions

//declaration
//R A N D O M   N A M E    F O R    C H A R A C T E R
let randomLastName = ['Billy' , 'Jacson' , 'Miracle' , 'Riccardo'];
var randomIndex = Math.floor(Math.random() * randomLastName.length);
var randomElement = randomLastName[randomIndex];

function helloVisitors(name = 'BOT' , lastname = randomElement){
    //if(typeof lastname === 'undefined') {lastname = randomElement}
    console.log(`Hello ${name} ${lastname}`);
}

helloVisitors();

function addition(number1,number2){
    return number1 + number2;
}
let result = addition(1,3);

console.log(result);

//function expressions
const sum = function(number1 , number2){
    return number1 + number2;
}
console.log(sum(3,5));

//functions expressionthat are immediately invoked 
(function(tecnology){
    console.log('Learning ' + tecnology);
})('JS');


//Propperty methods
//M U S I C     P L A Y E R
let treckid;
treckid = prompt('Fill the number id of song you want listen');
let songsDB = ['M.A.A.D City','Scar Tissue' , 'Californication' , 'Swimming Pool' , 'Electrolegalize'];
let MPlength = songsDB.length;
const musicPlayer = {
    //method1 = play
    songs: function(len = MBlength){
        console.log(`Songs in playplits: ${MBlength}`);
    },
    play: function(id = 1){
        console.log(`Playing song (${songsDB[id - 1]}) with the ID: ${id}`);
    },
    pause: function(id = 1){
        console.log(`Pause... ${songsDB[id - 1]} `);
    },
    remove: function(id = 1){
        console.log(`The song with the id ${songsDB[id - 1]} is removed.... `)
    }
}

musicPlayer.play(treckid);
musicPlayer.pause(treckid);
musicPlayer.remove(treckid);