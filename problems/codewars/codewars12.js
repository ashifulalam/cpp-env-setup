function giveMeFive(obj){
    let arr = [];

    for(let o in obj){

       o.length === 5 ? arr.push(o) : null ;

        obj[o].length === 5 ? arr.push(obj[o]) : null;

    }

    return arr;

}

const person = {
    name:'Ashiful Alam',
    gender: 'Malee',
    title: 'fruits',

}


let x = giveMeFive(person)

console.log(x);