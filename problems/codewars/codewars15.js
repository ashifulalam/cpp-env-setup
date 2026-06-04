function howManySmaller(arr,n){
    newArr = [];
    count = 0;

    for(let a of arr){
       newArr.push(a.toFixed(2))
    }

    for(let x of newArr){
        x < n ? count+=1 : null;
    }

    return count;
}


console.log(howManySmaller([3.1288,3.1212,3.1205],3.1212));