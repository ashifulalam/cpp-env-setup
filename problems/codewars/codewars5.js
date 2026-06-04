'use strict';

/*
 let animal = {
    name : 'dog',
}

animal.name = 'cow'
animal["name"]= 'cat';
console.log(animal.name);
 */


function animal(obj){
    return(`This ${obj.color} ${obj.name} has ${obj.legs} legs.`);
}

let ani = {
    name:'dog',
    legs: 4,
    color: 'white',
};

console.log(animal(ani));

