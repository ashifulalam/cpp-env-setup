function shuffleIt(arr, ...swap){
    for(let[i,j] of swap){
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr;
}


console.log(shuffleIt([1,2,3,4,5],[1,2],[3,4],[2,3]));