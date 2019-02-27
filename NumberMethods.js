//Numbers

const number1 = 30, number2 = 214;

let result;
//+,-,*,/,%
result = number1 % number2;

//Methods
//Pi
result = Math.PI;

//Round
result = Math.round(2,4);

resutl = Math.ceil(2.2);
resutl = Math.floor(2.2);

result = Math.sqrt(number2);
result = Math.abs(number2);

result = Math.pow(2,6);
result = Math.min(1,5,3,8,2,5);//max
console.log(result);
//comparing characters
console.log('a'< 'b');

//console.log('Z' > 'a');
console.log(2 == '2');
//typeof
console.log(2 === '2');


console.log(2 != 3);

console.log(2 != 3);
//Compare Null & undefined
console.log(null == undefined);

result = 20 + 30 * 2;
console.log(result)

////20 % discount from a shoppin cart
const cartItems = (20 + 30 + 30 + 40);
const disCount = (cartItems / 100) * 20;
const totalPay = cartItems - disCount;
console.log('Total:' + cartItems);
console.log('Discount: ' + disCount);
console.log('Payment: $' + totalPay);




///Numbers score
let score = 5;
score++;
console.log(score);
