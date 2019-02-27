//objects 
const person = {
    name: 'Roman', 
    lastName: 'Uliashyn' ,
    job: 'Web Dev' ,
    email: 'romanuliashyn@gmail.com' ,
    age: 20,
    favorite: ['Tech-House'] ,
    living: {
        city: 'Warsaw',
        born: 'Zaporuzhia',
        top3: ['Warsaw', 'Kyiv' , 'Zaporizhya']
    },
    BornYear: function(){
        return new Date().getFullYear() - this.age;
    },
    getJob: function(){
        return this.job;
    }
}
console.log(person);
console.log(person.favorite);
console.log(person.living.top3);
console.log(person.BornYear());
console.log(person.getJob());


//Array of objects
let cars = [
    {model: 'Mustang' , engine: 6.0},
    {model: 'Camagro' , engine: 6.1},
    {model: 'Chalanger' , engine: 6.1}
]
console.log(cars)

for(let i = 0; i < cars.length; i++){
    console.log(cars[i].model + ' '+ cars[i].engine );
}
console.log("-___-__--__-");
//const Variables with arrays objects
const newArr = [1,2,3];
newArr [0] = 'New Element in the array';
newArr.push = 'Smth new';
//you can override induvidually
console.log(newArr);

const car = {
    name: 'Mustang',
    engine: 6.4
}
console.log(car);

