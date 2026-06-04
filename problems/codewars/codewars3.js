"use strict";
let arr = [1, 2, 3, 4];

function getLength(arr) {
  return arr.length;
}

function getFirst(arr) {
  return arr[0];
}

function getLast(arr) {
  return (arr[arr.length-1]) // ⛳️
}
function pushElement(arr) {
  var el = 1;
  arr.push(el);
  return arr;
}
function popElement(arr) {
   arr.pop();
   return arr; // ⛳️
}

console.log(getLast(arr));

