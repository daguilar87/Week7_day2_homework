//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}



function favoriteFood() { for (let i = 0; i<person3.length; i++){
    console.log(vals[i])( vals = Object.values(person3))

}
}
console.log(person3)

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.printInfo= () => {
        console.log(`You are now ${this.age} years old!`)
    };
    
  this.addAge = () => {
    this.age += 1;
  };
}

let a= new Person('John', 10);

let b= new Person('Jane', 14)

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

a.addAge();
a.addAge();
a.addAge();
a.addAge();
b.addAge();
b.addAge();
b.addAge();
b.addAge();

a.printInfo()
b.printInfo()
// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if 
    it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
let bigWord = (wrd) => {
    return new Promise((resolve, reject) => {
      if (wrd.length > 10) {
        resolve(wrd);
      } else {
        reject(wrd.length);
      }
    });
  };

bigWord('hello')
.then( (result) =>{
    console.log(`Big Word! ${result}.`)
}).catch((result) => {
    console.log(`Small number ${result}.`);
})


// codewars

https://www.codewars.com/kata/583710ccaa6717322c000105/train/javascript

function simpleMultiplication(number) {
  if (number % 2 === 0) {
    return number * 8;
  } else {
    return number * 9;
  }
}
https://www.codewars.com/kata/570669d8cb7293a2d1001473

function ifChuckSaysSo(){
  return (1===2);
 }

