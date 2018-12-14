let person = {
    firstName: "erasfsdficasfsd",
    lastName: "Schwartz",
    DOB: "9/30",
    sayName: function(){
        return this.firstName + " " + this.lastName;
    }
}

//prior to es6
// function person(firstName, lastName, DOB){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.DOB = DOB;
//     this.sayName = function(){
//         return this.firstName + " " + this.lastName;
//     }
// }

class person {
    
    constructor(firstName, lastName, DOB){
        this.firstName = firstName;
        this.lastName = lastName;
        this.DOB = DOB;
        
    }

    sayName(){
        return this.firstName + " " + this.lastName;
    }
}

let myPerson = new person("eric", "schwartz", "9/30");
let myPerson2 = new person("Bob", "Smith", "9/31");

let people = [myPerson, myPerson2];

// for(let i = 0; i < people.length; i++ ){
//     console.log(people[i].sayName());
// }

let i =0;
for(let person of people){
    console.log(person.sayName());
    i++;
}

let i =0;
while(i<people.length){
    console.log(people[i].sayName());
    i++
}

as
fasfasdfasdf

addEventListenerasdf
