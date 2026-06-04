function bigToSmall(arr){
    let flatArray = arr.flat();
    flatArray.sort((a,b) => b-a);
    let x = flatArray.join('>');

    //console.log(x);

}



console.log(bigToSmall([[1,2],[3,4],[5,6]]) );
//should return "6>5>4>3>2>1"Hh