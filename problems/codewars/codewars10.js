function packIt(arr){
    let odd = [];
    let even = [];

    for(let a of arr){
        (a % 2 !== 0 ? odd : even).push(a);

    }

    return [odd,even]
}

let arr = [1,2,3,4];
packIt(arr);