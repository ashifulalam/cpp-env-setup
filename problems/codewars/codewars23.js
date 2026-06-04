function infiniteLoop(arr,d,n){

    for(let i = 1; i <= n ; i++){
        if( d=== 'left'){
            //[ , 2, 3,4], [, 5, 6,7], [, 8, 9,1]], 'left'
            arr[2].push(arr[0].shift());
            arr[1].push(arr[2].shift());
            arr[0].push(arr[1].shift());

        }else if( d === 'right'){
            //[[9,1, 2, ], [3,4, 5, ], [6,7, 8, ]], 'right'
            arr[0].unshift(arr[2].pop());
            arr[1].unshift(arr[0].pop()) 
            arr[2].unshift(arr[1].pop());

            //console.log(arr[2]);
        }
    }

    return arr;
    
}










  // Test examples:
  console.log(infiniteLoop([[ 1, 2, 3], [4, 5, 6], [7, 8, 9]], 'left', 1));  
  // should return  [[2, 3,4], [5, 6,7], [8, 9, 1]]
  
  console.log(infiniteLoop([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 'right', 1)); 
  // should return [[9, 1, 2], [3, 4, 5], [6, 7, 8]]

  console.log(infiniteLoop( [[1,2],[3,4,5,6],[7,8,9,10]],"left",2));

  //should return [[3,4],[5,6,7,8],[9,10,1,2]]

  