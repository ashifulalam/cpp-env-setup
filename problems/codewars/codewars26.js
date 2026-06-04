function isolateIt(arr){

    let newArr = []
    for(let i =0; i< arr.length; i++){
        let itemLength = arr[i].length;

        if(itemLength % 2 === 0){
            let demo = arr[i].slice(0, itemLength/2) +'|'+arr[i].slice(itemLength/2);
            newArr.push(demo)
        }else{
            let demo = arr[i].slice(0, itemLength/2) +'|'+arr[i].slice(itemLength/2+1);
            newArr.push(demo)
        }
    }

    return newArr;
}
  
  // Example Test Cases
  console.log(isolateIt(["abcd", "efgh"]));        // Output: ["ab|cd", "ef|gh"]
  console.log(isolateIt(["abcde", "fghij"]));      // Output: ["ab|de", "fg|ij"]
  console.log(isolateIt(["1234", "56789"]));       // Output: ["12|34", "56|89"]
  