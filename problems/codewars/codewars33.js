function maxMin(arr1, arr2){
    let newArr =[];

    for(let i =0; i<arr1.length; i++){
        let x = arr1[i] -arr2[i];
        let y = Math.abs(x);
        newArr.push(y);
    }

    let max = Math.max(...newArr);
    let min = Math.min(...newArr);

    return[max,min]
   
}


console.log(maxMin([1,3,5],[9,8,7]));
