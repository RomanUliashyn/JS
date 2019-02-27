const numbers = [10,20,30,21];
console.log(numbers);

///Array of month
const month = new Array('January', 'February' , 
                        'March','April','May','June');
console.log(month);

//Mixed Values
const mixedArray = ['Hello' , 10 , null];
console.log(mixedArray);
console.log(typeof mixedArray[1]);


console.log(month.length);
//Check if this is an array
console.log(Array.isArray(mixedArray));
//Change values of the array
month[1] = '______'
console.log(month);
//Find smth in the array
console.log(month.indexOf('December'));
console.log('_________________');
//Add more items into array
month.push('July');
console.log(month);
//Add at the begining
month.unshift('Month 0');
console.log(month);
//Add an element in the middle
month.splice(2,null,'asAD');
console.log(month);
//How to remove from the end
month.pop();
console.log(month);
//How to remove from the start
month.shift();
console.log(month);
//How to remove from the middle
month.splice(2,1);
console.log(month);
console.log('_________________');
//Reverse method
month.reverse();
console.log(month);
//Concatinate 2 arrays
const ar1 = [1,2,6] , ar2 = [2,6,1];

console.log(ar1.concat(ar2));
console.log('_________________');
//Order an array (sort)
let fruits = ['Banana' , 'Apple' , 'Orange'];

console.log(fruits.sort().reverse());


const arrayNumbers = [3,2,2,21,3,12,312,3,1,241,2,1,23,]
arrayNumbers.sort();
console.log(arrayNumbers);