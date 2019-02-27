const learning = 'Learning JS is Great!';
const email = 'romanuliashyngmail.com';
let output;

//length
output = learning.length;
//concat
output = learning.concat(" " , "and fun");
// uppercase || toLowerCase
output = learning.toLocaleUpperCase();
//indexof
output = learning.indexOf('JS');
//CHeck if @ exist on the form
output = email.indexOf("@");

if(output > 0){
    console.log("Valid Email:" + email);
} else {
    console.log("Invalid Email");
}
//substring
output = learning.substring(0,11); //Learning JS
//substring from the end
output = learning.substring(learning.length - 6); 
//slice
output = learning.slice(0,10);
//output = learning.slice(-6);

//split
output = learning.split(' ');
//Example

const hobbies = 'read , walk , listen to music write , learn to program';
output = hobbies.split(',');

//Replace
output = learning.replace('JS','Modern JSS');
//Includes
output = learning.includes('JS');
output = learning.includes('Modern');
//Repeat
let greet = "Hello\n";
output = greet.repeat(5);
console.log(output);