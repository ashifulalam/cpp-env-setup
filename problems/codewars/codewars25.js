function sortIt(arr) {
    let numberOf = {};
    arr.forEach(x => numberOf[x] = (numberOf[x] || 0) + 1);
    return arr.slice().sort((x, y) => numberOf[x] - numberOf[y] || y - x);
  }
  
  
  // Test cases
  console.log(sortIt([1, 1, 1, 2, 2, 3]));  // Output: [3, 2, 2, 1, 1, 1]
  console.log(sortIt([1, 1, 1, 2, 2, 2, 3, 3, 3]));  // Output: [3, 3, 3, 2, 2, 2, 1, 1, 1]
  console.log(sortIt([1, 2, 3, 4, 4, 5, 5, 6, 6]));  // Output: [3, 2, 1, 6, 6, 5, 5, 4, 4]


  