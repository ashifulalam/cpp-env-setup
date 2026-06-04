function threeInOne(arr){
    let result = []
    for(let i =0; i<arr.length; i=i+3){
        let sum = arr[i] + arr[i+1] + arr[i+2];
        //console.log(sum);
        result.push(sum)
        //console.log(result);
    }

    return result;
}






console.log(threeInOne([1, 2, 3])); // Expected output: [6]
//console.log(threeInOne([1, 2, 3, 4, 5, 6])); // Expected output: [6, 15]
//console.log(threeInOne([1, 2, 3, 4, 5, 6, 7, 8, 9])); // Expected output: [6, 15, 24]
//console.log(threeInOne([1, 3, 5, 2, 4, 6, 7, 7, 7])); // Expected output: [9, 12,