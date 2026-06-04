function whatNumberIsIt(n){
    if(n === Number.MAX_VALUE){
        return ("Input number is Number.MAX_VALUE");
    }else if(n === Number.MIN_VALUE){
        return ("Input number is Number.MIN_VALUE");
    }else if (isNaN(n)){
        return ("Input number is Number.NaN");
    }else if(n=== Number.NEGATIVE_INFINITY){
        return ("Input number is Number.NEGATIVE_INFINITY");
    }else if(n === Number.POSITIVE_INFINITY){
        return ("Input number is Number.POSITIVE_INFINITY");
    }else{
        return (`Input number is ${n}`);
    }
}

x = whatNumberIsIt(1.7976931348623157e+308
);

console.log(x);

/// face problem in line 6 in this line
//isNaN(n)