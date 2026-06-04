

function mirrorImage(arr){
    for(let i=0; i < arr.length-1; i++ ){
        let num1 = arr[i];
        let num2 = arr[i+1];

        let x = parseInt(num1.toString().split('').reverse().join(''));

        if(x === num2){
            return [num1,num2];
        }
    }

    return [-1,-1]
}

//console.log(mirrorImage([11, 22, 33, 33, 22, 11]));   // Should return [33, 33]
console.log(mirrorImage([454, 86, 57, 75, 16, 88]));  // Should return [57, 75]
console.log(mirrorImage([454, 0, 57, 0, 16, 88]));    // Should return [-1, -1]
