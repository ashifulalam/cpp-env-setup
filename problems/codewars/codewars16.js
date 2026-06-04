function cutIt(arr){
    let shortestLength = Infinity;
    let newArray = []

    for(let a of arr){
        if(a.length < shortestLength){
            shortestLength = a.length;
        }
    }

    for(let a of arr){
        newArray.push(a.slice(0, shortestLength));
    }


    return newArray;
    
}


console.log(cutIt(["ab","cde","fgh"]));
console.log(cutIt(["abc","defgh","ijklmn"]));
console.log(cutIt(["codewars","javascript","java"]));