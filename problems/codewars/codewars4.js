'use strict';

let arr = [10,15,20,25]



function getLength(arr){
    return (arr.length);
};

function getFirst(arr) {
    return (arr[0]);
};

function getLast(arr){
    return(arr[length-1]);
}

function pushElement(arr){
    let el=1;
    arr.push(el);
    return arr;
}

function popElement(arr){
    arr.pop();  // Remove last element
    return arr.length;  // Return the new length of the array
}

console.log(pushElement(arr));
console.log(popElement(ar));