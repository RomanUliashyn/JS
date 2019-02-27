//Converting strings into numbers
const number1 = '50';
    number2 = 10;
    number3 = 'Nine';

    console.log(number1 + number2); // = 5010

    //Convert number1 into a number

    console.log(Number(number1) + number2);// 60
    console.log(parseInt(number1) + number2);// 60


    console.log(number3); //Nine
    console.log(Number(number3));//NaN - not a number

//Concatenete the values , the substraction will work as well
    console.log(number1 - number2); // = 40 

//Another metrhods and values
let number;

number = Number('20');
number = Number('20.23123');
number = Number(true);//1
number = parseInt(true);//NaN

number = Number('Hello World');//Nan this is a string
console.log(number);

//Parse In & float
number = parseInt('100');
number = parseInt('100.20');// only 100
number = parseFloat('100.20');
console.log(number);

//To fixed

let number11 = '123214211524.2345623', number22 = 123214211524.123214211524;  
console.log(Number(number11).toFixed());// To fixed cannot be used with strings
console.log(number22.toFixed(6)); //123214211524.123215


//Convert to string

let output;
output = new Date();
output = String(output);

console.log(output);
console.log(output.indexOf('2019'));
//Array to a string
output = [1,2,3,5];
output = String(output);
//Obj
output = {name: 'Roman'}.toString();

console.log(output);
console.log(typeof output);


//Convert variable to a strings
console.log('________________________');
let num = 90201,
    res;

    res = String(num);
console.log(res.length)
console.log(typeof res)

console.log('____');
//Boolean to string
let oput;
//Banking system 
oput = String(true);
oput = new Date();
oput = String(oput);
//Array into string
oput = String([1,2,3,5]);
//To string more useles whem we have an object
oput = {name: 'Roman'}.toString();
console.log(oput);




