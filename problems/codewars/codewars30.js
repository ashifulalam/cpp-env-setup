function tailAndHead(arr){
    let product = 1;

    arr.reduce((prev, current) => {
        let s1 = prev.toString();
        let s2 = current.toString();
        //[123 ,456]
        product *= parseInt(s1[s1.length-1]) + parseInt(s2[0]);

        return current;
    })

    return product;
}


console.log(tailAndHead([1,2,3,4,5]) );